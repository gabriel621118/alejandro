import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsamblarComponent } from './ensamblar.component';

describe('EnsamblarComponent', () => {
  let component: EnsamblarComponent;
  let fixture: ComponentFixture<EnsamblarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnsamblarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsamblarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
