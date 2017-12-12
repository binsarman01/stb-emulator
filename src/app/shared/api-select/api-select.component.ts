import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService, IAPIAccessKeys, IAPIUrl } from 'app/shared/services/API/api.service';

@Component({
  selector: 'app-api-select',
  templateUrl: './api-select.component.html',
  styleUrls: ['./api-select.component.css']
})
export class ApiSelectComponent {

  apiKeys: IAPIAccessKeys[] = [{
    name: 'cells',
    key: 'c92ad111-2cac-43f6-93c2-cc25276f7b2a'
  }];

  apiUrls: IAPIUrl[] = [{
    name: 'dev-eimind',
    url: 'https://dev.eimind.comigo.com/'
  }];

  selectedApiUrl: IAPIUrl = this.apiUrls[0];
  selectedApiKey: IAPIAccessKeys = this.apiKeys[0];

  constructor(private _apiService: ApiService) {
    this._apiService.selectedApiUrl = this.selectedApiUrl;
    this._apiService.selectedApiKey = this.selectedApiKey;
  }

  apiUrlUpdate(apiUrl: IAPIUrl){
    this._apiService.selectedApiUrl = apiUrl;
  }

  apiKeyUpdate(apiKey: IAPIAccessKeys){
    this._apiService.selectedApiKey = apiKey;
  }

}