import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { WatchappService, IWatchapp} from './watchapp.service';
import { ApiEmulatorService } from 'app/shared/services/API-emulator/api-emulator.service';

@Component({
  selector: 'app-watchapp',
  templateUrl: './watchapp.component.html',
  styleUrls: ['./watchapp.component.css']
})
export class WatchappComponent implements OnInit {
  iframeModal: boolean;
  watchapps: IWatchapp[];
  selectedWatchapp: IWatchapp = null;
  customUrl: string = 'http://';
  debugMode: boolean;
  @Input()params: string;

  constructor(private _watchappService: WatchappService, 
    private _apiEmulatorService: ApiEmulatorService) { 
    this._watchappService.getApps().subscribe((watchapps)=>{
      this.watchapps = watchapps;
    })
  }

  makeWatchappUrl(
    customUrl : string ,
    selectedWatchapp: IWatchapp ,
    params: string ,
    debugMode: boolean
  ){
    let result;
    if(selectedWatchapp){
      result = selectedWatchapp.url + 
        (selectedWatchapp.debug_mode && debugMode? 
        selectedWatchapp.debug_mode : selectedWatchapp.index) +
        params
    }else{
      result = customUrl + params;
    }
    return result;
  }

  updateFrame(event: Event){
    event.srcElement['focus']();
    this._apiEmulatorService.frame = event.srcElement;
  }

  ngOnInit() {
  }

}
