import { Injectable } from '@angular/core';
import { IMessage, ICall, ICallArgs } from './api-emulator.service';
import { Http } from '@angular/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable()
export class ApiEmulatorMethodsService {

  dummy: any[];

  constructor(private _http: Http){
    this._http.get('assets/data/devRexConfig.json').subscribe((data)=>{
      this.dummy = data.json()[0];
    });
  }

  sendMessage: Function;

  getContentMetadata(messsage: ICall){
    this.sendMessage({
      ticket: messsage.ticket,
      status: true,
      //TODO: Change dummy to the function
      data: [{"contentType":"epg","contentId":3345,"title":"Demo Epg 0","plot":"","thumbnail":"www.demo.com/demo.jpeg","mediaId":0,"startTime":"","endTime":"","channelId":1},{"contentType":"epg","contentId":332,"title":"Demo Epg","plot":"","thumbnail":"www.demo.com/demo.jpeg","mediaId":0,"startTime":"","endTime":"","channelId":1},{"contentType":"vod","contentId":12,"title":"Demo VOD","plot":"","thumbnail":"www.demo.com/demo.jpeg","mediaId":12,"sourceUrl":"www.demo.com/0"},{"contentType":"vod","contentId":14,"title":"Demo VOD","plot":"","thumbnail":"www.demo.com/demo.jpeg","mediaId":14,"sourceUrl":"www.demo.com/0"}]
    })
  }

  RexConfigWrapper(messsage: ICall){
    switch (true) {
      default:
        this.sendDummy(messsage);
        break;
    }
  }

  sendDummy(messsage: ICall){
    let url = messsage.args[ICallArgs.Url];
    let method = messsage.args[ICallArgs.Method];
    this.sendMessage({
      ticket: messsage.ticket,
      status: true,
      data: this.dummy[url][method].data
    })
  }
}
