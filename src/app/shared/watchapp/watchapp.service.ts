import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WatchappService {

  appsUrl = 'assets/data/apps.json'

  constructor(private _http: Http) { }

  getApps(): Observable<IWatchapp[]>{
    return this._http.get(this.appsUrl).map((res)=> res.json());
  }
}

export interface IWatchapp{
  name: string;
  url: string;
  index: string;
  debug_mode?: string;
}