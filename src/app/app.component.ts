import { Component } from '@angular/core';
import { AuthResponse } from 'ngx-facebook';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ApiEmulatorService } from 'app/shared/services/API-emulator/api-emulator.service';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  authData: AuthResponse;
  params: string = '?';
  frame: Element;

  constructor (private _appEmulator: ApiEmulatorService){
  }

  ngOnInit(){

  }


}
