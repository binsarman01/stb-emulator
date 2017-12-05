import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FacebookConnectComponent } from './facebook-connect/facebook-connect.component';
import { FacebookConnectService } from './facebook-connect/facebook-connect.service';
import { HelperService } from './services/helper/helper.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    FacebookConnectService,
    HelperService
  ],
  declarations: [
    FacebookConnectComponent
  ],
  exports: [
    FacebookConnectComponent
  ]
})
export class SharedModule { }
