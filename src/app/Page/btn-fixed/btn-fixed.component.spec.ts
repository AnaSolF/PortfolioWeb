import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFixedComponent } from './btn-fixed.component';

describe('BtnFixedComponent', () => {
  let component: BtnFixedComponent;
  let fixture: ComponentFixture<BtnFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnFixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
