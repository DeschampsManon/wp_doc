import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleDetailedComponent } from './capsuleDetailed.component';

describe('CapsuleDetailedComponent', () => {
  let component: CapsuleDetailedComponent;
  let fixture: ComponentFixture<CapsuleDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsuleDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
