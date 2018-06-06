import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDetailedComponent } from './coreDetailed.component';

describe('CoreDetailedComponent', () => {
  let component: CoreDetailedComponent;
  let fixture: ComponentFixture<CoreDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
