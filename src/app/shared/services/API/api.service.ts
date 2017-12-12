import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthResponse } from 'ngx-facebook';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  selectedApiUrl: IAPIUrl;
  selectedApiKey: IAPIAccessKeys;

  constructor(
    private _http: Http
  ) { }

  fbLogin(authData: AuthResponse):Observable<IFacebookResponse>{
    
    let url = this.selectedApiUrl.url + 
               ApiMethods.FacebookLogin + 
               (this.selectedApiKey? '?'+ ApiParams.ApiKey +'=' + this.selectedApiKey.key : '');

    return this._http.post(url, {
      "fb_id": authData.userID,
      "fb_access_token": authData.accessToken,
      "push_token": '',
      "push_token_provider": ["comigo"],
    }).map((data)=>data.json());
  }
}

export interface IAPIAccessKeys{
  name: string;
  key: string;
}

export interface IAPIUrl{
  name: string;
  url: string;
}

export namespace ApiMethods {
  export const FacebookLogin = 'social/login/fb';
}

export namespace ApiParams {
  export const ApiKey = 'api_key';
}

export interface IFacebookResponse{
  access_token: string;
}