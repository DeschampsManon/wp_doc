import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadDetailsComponent } from './launchpadDetails.component';

describe('LaunchpadDetailsComponent', () => {
  let component: LaunchpadDetailsComponent;
  let fixture: ComponentFixture<LaunchpadDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchpadDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchpadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
