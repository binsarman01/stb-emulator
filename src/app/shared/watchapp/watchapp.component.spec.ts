import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchappComponent } from './watchapp.component';

describe('WatchappComponent', () => {
  let component: WatchappComponent;
  let fixture: ComponentFixture<WatchappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
