import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasListagemComponent } from './frutas-listagem.component';

describe('FrutasListagemComponent', () => {
  let component: FrutasListagemComponent;
  let fixture: ComponentFixture<FrutasListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutasListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrutasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
