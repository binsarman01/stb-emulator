import { Component, OnInit, Input } from '@angular/core';

import { AuthResponse } from 'ngx-facebook';

@Component({
  selector: 'app-socialite',
  templateUrl: './socialite.component.html',
  styleUrls: ['./socialite.component.css']
})
export class SocialiteComponent implements OnInit {

  @Input('data') authData: AuthResponse;

  constructor() { }

  ngOnInit() {
  }

}
