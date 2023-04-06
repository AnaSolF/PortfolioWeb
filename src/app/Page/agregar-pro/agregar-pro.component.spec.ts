import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProComponent } from './agregar-pro.component';

describe('AgregarProComponent', () => {
  let component: AgregarProComponent;
  let fixture: ComponentFixture<AgregarProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
