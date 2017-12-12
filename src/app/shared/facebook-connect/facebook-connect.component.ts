import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/finally';
import { FacebookConnectService, IFacebookAppKey, EFacebookStatus } from './facebook-connect.service';

import { AuthResponse } from 'ngx-facebook';

@Component({
  selector: 'app-facebook-connect',
  templateUrl: './facebook-connect.component.html',
  styleUrls: ['./facebook-connect.component.css']
})
export class FacebookConnectComponent {

  constructor(private _facebookConnectService: FacebookConnectService) { }

  watchappsFBkeys: IFacebookAppKey[] = [{
      name: 'Comigo-STB-emulator',
      appID: '1994606537419683',
      appSecret: '7d9757cda3be47564f077ac330f3190a'
  
    },{
      name: 'Comigo-STB localhost 4200',
      appID: '305627953283149',
      appSecret: '85bdd54874f5522b42dedd9a496bb125'
    },{
      name: 'Whos on',
      appID: '1500811360170218',
      appSecret: 'ab05a01402674a542837ca7670b37112'
  }];

  fbConnecting: boolean = false;
  selectedFBkey: IFacebookAppKey = this.watchappsFBkeys[0];
  accessToken: string;
  @Input('data') userAuthdata: AuthResponse;
  @Output('login') loginEvent = new EventEmitter<AuthResponse>();

  fbConnect(keys: IFacebookAppKey){
    this.fbConnecting = true;
    this._facebookConnectService.fbAppInit(keys).subscribe((fbResponse)=>{
      this.accessToken = fbResponse.access_token;

      this._facebookConnectService.fbLoginStatus().subscribe((loginStatus)=>{
        if(loginStatus.status == "connected"){
          this.userAuthdata = loginStatus.authResponse;
          this.loginEvent.emit(this.userAuthdata);
        }else{
          this.userAuthdata = null;
          this.loginEvent.emit(null);
        }
      })

    }, (error)=>{
      console.log(error);
    },()=>{
      this.fbConnecting = false;
    });
  }

  fbLogin(){
    this._facebookConnectService.fbLogin(this.accessToken).subscribe((fbResponse)=>{
      this.userAuthdata = fbResponse.authResponse;
      this.loginEvent.emit(this.userAuthdata);
    });
  }

  fbLogout(){
    this._facebookConnectService.fbLogout().subscribe((res)=>{
      this.userAuthdata = null;
      this.loginEvent.emit(null);
    })
  }

}