import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';

import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

import { HelperService } from '../services/helper/helper.service';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class FacebookConnectService {

  baseAPIUrl: string = 'https://graph.facebook.com';
  authUrl: string = this.baseAPIUrl + '/oauth/access_token?client_id={appID}&client_secret={appSecret}&grant_type=client_credentials';
  deviceLogin: string = 'https://graph.facebook.com/device/share';

  constructor(private _http: Http, private _facebookService: FacebookService) { }

  fbAppInit(keys: IFacebookAppKey): Observable<IFacebookAccsessToken> {
    this._facebookService.init({
      appId            : keys.appID,
      xfbml            : true,
      version          : 'v2.11'
    });

    return this._http.get(HelperService.urlBuilder(this.authUrl, keys)).map((res) => res.json());
  }

  fbLogin(accessToken): Observable<LoginResponse>{
    return Observable.fromPromise(this._facebookService.login());
  }

  fbLoginStatus(){
    return Observable.fromPromise(this._facebookService.getLoginStatus());
  }

  fbLogout(){
    return Observable.fromPromise(this._facebookService.logout());
  }
}

export interface IFacebookAppKey {
  name?: string;
  appID: string;
  appSecret: string;
}

export interface IFacebookAccsessToken{
  access_token: string;
  token_type: string;
}

export interface IFacebookAuthResponse{
  user_code: string;
  verification_uri: string;
  expires_in: number;
}

export enum EFacebookStatus{
  // Connected = "connected"
}