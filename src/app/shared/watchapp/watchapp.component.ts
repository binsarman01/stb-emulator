import { Component, OnInit } from '@angular/core';
import { WatchappService, IWatchapp} from './watchapp.service';

@Component({
  selector: 'app-watchapp',
  templateUrl: './watchapp.component.html',
  styleUrls: ['./watchapp.component.css']
})
export class WatchappComponent implements OnInit {

  watchapps: IWatchapp[];
  selectedWatchapp: IWatchapp = null;
  customUrl: string = 'http://';
  debugMode: boolean;
  params: string = '?test_params_string=true&in_development=true';

  constructor(private _watchappService: WatchappService) { 
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

  ngOnInit() {
  }

}
