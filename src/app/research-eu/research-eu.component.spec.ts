import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchEuComponent } from './research-eu.component';

describe('ResearchEuComponent', () => {
  let component: ResearchEuComponent;
  let fixture: ComponentFixture<ResearchEuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchEuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchEuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
