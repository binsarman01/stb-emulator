import { Component, OnInit, Input } from '@angular/core';

import { AuthResponse } from 'ngx-facebook';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ApiService, IFacebookResponse } from 'app/shared/services/API/api.service';


@Component({
  selector: 'app-socialite',
  templateUrl: './socialite.component.html',
  styleUrls: ['./socialite.component.css']
})
export class SocialiteComponent {

  authToken: IFacebookResponse;

  @Input('data') authData: AuthResponse;

  constructor(
    private _apiService: ApiService
  ) { }

  socialite(authData: AuthResponse){
    this._apiService.fbLogin(authData).subscribe((data)=>{
      this.authToken = data;
    }, (error)=>{
      console.log(error);
    })
  }

}
