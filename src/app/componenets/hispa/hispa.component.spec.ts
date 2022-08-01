import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HispaComponent } from './hispa.component';

describe('HispaComponent', () => {
  let component: HispaComponent;
  let fixture: ComponentFixture<HispaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HispaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HispaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
