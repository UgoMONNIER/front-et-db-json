import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedRideComponent } from './assigned-ride.component';

describe('AssignedRideComponent', () => {
  let component: AssignedRideComponent;
  let fixture: ComponentFixture<AssignedRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignedRideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
