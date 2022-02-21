import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BazsiComponent } from './bazsi.component';

describe('BazsiComponent', () => {
  let component: BazsiComponent;
  let fixture: ComponentFixture<BazsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BazsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BazsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
