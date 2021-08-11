import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchedLinkComponent } from './witched-link.component';

describe('WitchedLinkComponent', () => {
  let component: WitchedLinkComponent;
  let fixture: ComponentFixture<WitchedLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WitchedLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WitchedLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
