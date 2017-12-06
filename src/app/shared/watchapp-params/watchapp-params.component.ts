import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-watchapp-params',
  templateUrl: './watchapp-params.component.html',
  styleUrls: ['./watchapp-params.component.css']
})
export class WatchappParamsComponent implements OnInit {

  @Input('data') params;

  constructor() { }

  ngOnInit() {
  }

}
