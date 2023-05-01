/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeachEuComponent } from './teach-eu.component';

describe('TeachEuComponent', () => {
  let component: TeachEuComponent;
  let fixture: ComponentFixture<TeachEuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachEuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachEuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
