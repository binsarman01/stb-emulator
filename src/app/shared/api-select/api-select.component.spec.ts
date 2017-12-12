import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSelectComponent } from './api-select.component';

describe('ApiSelectComponent', () => {
  let component: ApiSelectComponent;
  let fixture: ComponentFixture<ApiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
