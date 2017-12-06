import { Component } from '@angular/core';
import { AuthResponse } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authData: AuthResponse;
  params;
}
