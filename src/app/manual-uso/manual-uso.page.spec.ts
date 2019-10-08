import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualUsoPage } from './manual-uso.page';

describe('ManualUsoPage', () => {
  let component: ManualUsoPage;
  let fixture: ComponentFixture<ManualUsoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualUsoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualUsoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
