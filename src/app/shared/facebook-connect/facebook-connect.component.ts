import { Component, OnInit } from '@angular/core';
import { FacebookConnectService, IFacebookAppKey } from './facebook-connect.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-facebook-connect',
  templateUrl: './facebook-connect.component.html',
  styleUrls: ['./facebook-connect.component.css']
})
export class FacebookConnectComponent {

  constructor(private _facebookConnectService: FacebookConnectService) { }

  watchappsFBkeys: IFacebookAppKey[] = [{
    name: 'whos_on',
    appID: '1500811360170218',
    appSecret: 'ab05a01402674a542837ca7670b37112'
  },{
    name: 'Comigo-STB-emulator',
    appID: '1994606537419683',
    appSecret: '7d9757cda3be47564f077ac330f3190a'

  }];
  fbConnecting: boolean = false;
  selectedFBkey: IFacebookAppKey;
  accessToken: string;
  userAuthdata;

  fbConnect(keys: IFacebookAppKey){
    this.fbConnecting = true;
    this._facebookConnectService.fbAppInit(keys).subscribe((fbResponse)=>{
      this.accessToken = fbResponse.access_token;
    }, (error)=>{
      console.log(error);
    },()=>{
      this.fbConnecting = false;
    });
  }

  fbLogin(){
    this._facebookConnectService.fbLogin(this.accessToken).subscribe((fbResponse)=>{
      console.log(fbResponse);
      this.userAuthdata = fbResponse.authResponse;
    });
  }

}