import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchappParamsComponent } from './watchapp-params.component';

describe('WatchappParamsComponent', () => {
  let component: WatchappParamsComponent;
  let fixture: ComponentFixture<WatchappParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchappParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchappParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
