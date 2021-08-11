import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchedHeadlineComponent } from './witched-headline.component';

describe('WitchedHeadlineComponent', () => {
  let component: WitchedHeadlineComponent;
  let fixture: ComponentFixture<WitchedHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WitchedHeadlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WitchedHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
