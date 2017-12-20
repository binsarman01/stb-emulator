import { Component, OnInit, Input } from '@angular/core';

import { AuthResponse } from 'ngx-facebook';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ApiService, IFacebookResponse, IContentType } from 'app/shared/services/API/api.service';



@Component({
  selector: 'app-socialite',
  templateUrl: './socialite.component.html',
  styleUrls: ['./socialite.component.css']
})
export class SocialiteComponent {

  authToken: IFacebookResponse;
  contentId: string;
  CTenum = IContentType;
  contentType: IContentType = IContentType.EPG;

  @Input('data') authData: AuthResponse;

  constructor(
    private _apiService: ApiService
  ) { }

  socialite(authData: AuthResponse){
    this._apiService.fbLogin(authData).subscribe((data)=>{
      this.authToken = data;
      this._apiService.authToken = data;
    }, (error)=>{
      console.log(error);
    })
  }

  setViewState(contentId: string, contentType: IContentType, authData: IFacebookResponse){
    this._apiService.setViewState(contentId, contentType, authData).subscribe((data)=>{
      alert('SET VIEW STATE OK');
    })
  }

  unsetViewState(authData: IFacebookResponse){
    this._apiService.unsetViewState(authData).subscribe(()=>{
      alert('UNSET VIEW STATE OK');
    })
  }

}
