import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FacebookConnectComponent } from './facebook-connect/facebook-connect.component';
import { FacebookConnectService } from './facebook-connect/facebook-connect.service';
import { WatchappService } from './watchapp/watchapp.service';
import { HelperService } from './services/helper/helper.service';
import { ApiEmulatorService } from './services/API-emulator/api-emulator.service';
import { ApiEmulatorMethodsService } from 'app/shared/services/API-emulator/api-emulator-methods.service';
import { SocialiteComponent } from './socialite/socialite.component';
import { WatchappParamsComponent } from './watchapp-params/watchapp-params.component';
import { WatchappComponent } from './watchapp/watchapp.component';
import { SafePipe } from './pipes/safe.pipe';
import { ApiSelectComponent } from './api-select/api-select.component';
import { ApiService } from 'app/shared/services/API/api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    FacebookConnectService,
    WatchappService,
    HelperService,
    ApiEmulatorService,
    ApiEmulatorMethodsService,
    ApiService
  ],
  declarations: [
    FacebookConnectComponent,
    SocialiteComponent,
    WatchappParamsComponent,
    WatchappComponent,
    SafePipe,
    ApiSelectComponent
  ],
  exports: [
    FacebookConnectComponent,
    SocialiteComponent,
    WatchappParamsComponent,
    WatchappComponent,
    ApiSelectComponent
  ]
})
export class SharedModule { }
