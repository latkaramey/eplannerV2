import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGanttChartsComponent } from './view-gantt-charts.component';

describe('ViewGanttChartsComponent', () => {
  let component: ViewGanttChartsComponent;
  let fixture: ComponentFixture<ViewGanttChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGanttChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGanttChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
