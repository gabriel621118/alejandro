import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogObservacionComponent } from './dialog-observacion.component';

describe('DialogObservacionComponent', () => {
  let component: DialogObservacionComponent;
  let fixture: ComponentFixture<DialogObservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogObservacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogObservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
