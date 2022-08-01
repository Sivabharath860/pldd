import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrownspotComponent } from './brownspot.component';

describe('BrownspotComponent', () => {
  let component: BrownspotComponent;
  let fixture: ComponentFixture<BrownspotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrownspotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrownspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
