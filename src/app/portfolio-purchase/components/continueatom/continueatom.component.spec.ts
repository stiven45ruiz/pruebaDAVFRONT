import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueatomComponent } from './continueatom.component';

describe('ContinueatomComponent', () => {
  let component: ContinueatomComponent;
  let fixture: ComponentFixture<ContinueatomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinueatomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueatomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
