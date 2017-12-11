import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-watchapp-params',
  templateUrl: './watchapp-params.component.html',
  styleUrls: ['./watchapp-params.component.css']
})
export class WatchappParamsComponent implements OnInit {

  @Input('data') params;
  @Output('update') paramsChange = new EventEmitter<string>();
  constructor() { }

  defaultWhosOn = "?debug_mode=1&" +
                  "platform=web&" + 
                  "device_id=0&" + 
                  "content_type=&" +
                  "content_id=0&" +
                  "content_title=The tonight show&" +
                  "associated_content_id=3&" +
                  "platform_version=0&" +
                  "user_id=0&" +
                  "payload=&" +
                  "operator=D0&" +
                  "dev_rex=true&" +
                  "channel_id=0"

  ngOnInit() {
  }

  updatePrams(params){
    this.paramsChange.emit(params);
  }

}
