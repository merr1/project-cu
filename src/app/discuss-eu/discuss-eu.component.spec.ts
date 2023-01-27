import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussEuComponent } from './discuss-eu.component';

describe('DiscussEuComponent', () => {
  let component: DiscussEuComponent;
  let fixture: ComponentFixture<DiscussEuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussEuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussEuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
