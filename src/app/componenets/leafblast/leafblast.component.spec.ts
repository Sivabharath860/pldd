import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafblastComponent } from './leafblast.component';

describe('LeafblastComponent', () => {
  let component: LeafblastComponent;
  let fixture: ComponentFixture<LeafblastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafblastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafblastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
