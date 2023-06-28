import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationViewComponent } from './simulation-view.component';

describe('SimulationViewComponent', () => {
  let component: SimulationViewComponent;
  let fixture: ComponentFixture<SimulationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
