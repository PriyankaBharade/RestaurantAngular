import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomepipesComponent } from './customepipes.component';

describe('CustomepipesComponent', () => {
  let component: CustomepipesComponent;
  let fixture: ComponentFixture<CustomepipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomepipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomepipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
