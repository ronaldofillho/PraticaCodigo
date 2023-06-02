import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasCadastroComponent } from './frutas-cadastro.component';

describe('FrutasCadastroComponent', () => {
  let component: FrutasCadastroComponent;
  let fixture: ComponentFixture<FrutasCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutasCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrutasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
