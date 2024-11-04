import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformePagosPage } from './informe-pagos.page';

describe('InformePagosPage', () => {
  let component: InformePagosPage;
  let fixture: ComponentFixture<InformePagosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformePagosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
