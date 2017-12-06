import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FacebookConnectComponent } from './facebook-connect/facebook-connect.component';
import { FacebookConnectService } from './facebook-connect/facebook-connect.service';
import { WatchappService } from './watchapp/watchapp.service';
import { HelperService } from './services/helper/helper.service';
import { SocialiteComponent } from './socialite/socialite.component';
import { WatchappParamsComponent } from './watchapp-params/watchapp-params.component';
import { WatchappComponent } from './watchapp/watchapp.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    FacebookConnectService,
    WatchappService,
    HelperService
  ],
  declarations: [
    FacebookConnectComponent,
    SocialiteComponent,
    WatchappParamsComponent,
    WatchappComponent,
    SafePipe
  ],
  exports: [
    FacebookConnectComponent,
    SocialiteComponent,
    WatchappParamsComponent,
    WatchappComponent
  ]
})
export class SharedModule { }
