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
    
    let url: string = this.selectedApiUrl.url + 
                          ApiMethods.FacebookLogin + 
                          (this.selectedApiKey? '?'+ ApiParams.ApiKey +'=' + this.selectedApiKey.key : '');

    let fbLoginRequest: IFacebookLoginRequest = {
      fb_id: authData.userID,
      fb_access_token: authData.accessToken,
      push_token: '',
      push_token_provider: ["comigo"]
    };

    return this._http.post(url, fbLoginRequest).map((data)=>data.json());
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

export interface IFacebookLoginRequest{
  fb_id: string;
  fb_access_token: string;
  push_token: string;
  push_token_provider: string[];
}

export interface IFacebookResponse{
  access_token: string;
}