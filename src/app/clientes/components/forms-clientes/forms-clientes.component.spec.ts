import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsClientesComponent } from './forms-clientes.component';

describe('FormsClientesComponent', () => {
  let component: FormsClientesComponent;
  let fixture: ComponentFixture<FormsClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
