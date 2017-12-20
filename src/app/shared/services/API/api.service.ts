import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthResponse } from 'ngx-facebook';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  selectedApiUrl: IAPIUrl;
  selectedApiKey: IAPIAccessKeys;
  authToken: IFacebookResponse;

  constructor(
    private _http: Http
  ) { }

  fbLogin(authData: AuthResponse):Observable<IFacebookResponse>{
    let fbLoginRequest: IFacebookLoginRequest = {
      fb_id: authData.userID,
      fb_access_token: authData.accessToken,
      push_token: '',
      push_token_provider: ["comigo"]
    };

    return this._http.post(this.methodUrl(ApiMethods.FacebookLogin), fbLoginRequest).map((data)=>data.json());
  }

  //TODO: change response type
  setViewState(contentId: string, contentType: IContentType, authData: IFacebookResponse):Observable<any>{
    let setViewStateRequest: ISetViewStateRequest = {
      access_token: authData.access_token,
      content_id: contentId,
      content_source: contentType
    };

    return this._http.post(this.methodUrl(ApiMethods.SetViewState), setViewStateRequest).map((data)=>data.json());
  }

  unsetViewState(authData: IFacebookResponse):Observable<any>{
    let unsetViewStateRequest: IUnsetViewStateRequest = {
      access_token: authData.access_token,
    };

    return this._http.delete(this.methodUrl(ApiMethods.UnsetViewState, unsetViewStateRequest));
  }

  methodUrl(method, params?): string{
    let result = this.selectedApiUrl.url + method + '?' +
        (this.selectedApiKey? ApiParams.ApiKey +'=' + this.selectedApiKey.key : '');

    for (let paramKey in params){
      result = result + '&' + paramKey + '=' + params[paramKey];
    }

    return result;
  }
}

//INTERFACES

export interface IAPIAccessKeys{
  name: string;
  key: string;
}

export interface IAPIUrl{
  name: string;
  url: string;
}

export namespace ApiMethods {
  export const FacebookLogin = 'login/fb';
  export const SetViewState = 'view_state';
  export const UnsetViewState = 'view_state';
}

export enum ApiParams {
  ApiKey = 'api_key'
}

export enum IContentType{
  EPG = 'epg',
  VOD = 'vod'
}

//REQUEST/RESPONSE

export interface IFacebookLoginRequest{
  fb_id: string;
  fb_access_token: string;
  push_token: string;
  push_token_provider: string[];
}

export interface IFacebookResponse{
  access_token: string;
}

export interface ISetViewStateRequest{
  access_token: string;
  content_id: string;
  content_source: IContentType
}

export interface IUnsetViewStateRequest{
  access_token: string;
}