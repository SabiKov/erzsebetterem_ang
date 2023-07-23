import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePriceComponent } from './manage-price.component';

describe('ManagePriceComponent', () => {
  let component: ManagePriceComponent;
  let fixture: ComponentFixture<ManagePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
