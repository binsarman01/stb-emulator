import { Injectable, OnInit } from '@angular/core';
import { ApiEmulatorMethodsService } from 'app/shared/services/API-emulator/api-emulator-methods.service';

@Injectable()
export class ApiEmulatorService{

  frame: Element;

  constructor(private _methods: ApiEmulatorMethodsService) { 
    if (window.addEventListener) {
      window.addEventListener("message", this.receiveMessage.bind(this), false);
    } else {
       (<any>window).attachEvent("onmessage", this.receiveMessage.bind(this));
    }
    this._methods.sendMessage = this.sendMessage.bind(this);
  }

  private receiveMessage(event){
    if(!this.frame) return;
    let frameSrc = new URL(this.frame['src']);
    
    if(frameSrc.origin == event.origin){
      let data = JSON.parse(event.data) as ICall;
      if(data.function in this._methods){
        this._methods[data.function](data);
      }else{
        this.sendMessage({
          ticket: data.ticket,
          data: null,
          status: true
        })
      }
    }
  }

  public sendMessage(message: IMessage){
    this.frame['contentWindow'].postMessage(JSON.stringify(message), '*');
  }
}

export interface IMessage{
  ticket: string;
  data: any;
  status: boolean;
}

export interface ICall{
  function: string;
  args: any;
  ticket: string;
}

export enum ICallArgs{
  Url = 0,
  Params = 1,
  Method = 2
}