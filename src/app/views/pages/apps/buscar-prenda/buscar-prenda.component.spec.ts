import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPrendaComponent } from './buscar-prenda.component';

describe('BuscarPrendaComponent', () => {
  let component: BuscarPrendaComponent;
  let fixture: ComponentFixture<BuscarPrendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPrendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
