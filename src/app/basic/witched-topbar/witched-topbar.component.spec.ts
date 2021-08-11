import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchedTopbarComponent } from './witched-topbar.component';

describe('WitchedTopbarComponent', () => {
  let component: WitchedTopbarComponent;
  let fixture: ComponentFixture<WitchedTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WitchedTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WitchedTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
