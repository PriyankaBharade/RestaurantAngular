import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedroutingComponent } from './nestedrouting.component';

describe('NestedroutingComponent', () => {
  let component: NestedroutingComponent;
  let fixture: ComponentFixture<NestedroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedroutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
