import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSimulationsComponent } from './add-simulations.component';

describe('AddSimulationsComponent', () => {
  let component: AddSimulationsComponent;
  let fixture: ComponentFixture<AddSimulationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSimulationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSimulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
