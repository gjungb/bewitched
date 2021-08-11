import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchedRefreshComponent } from './witched-refresh.component';

describe('WitchedRefreshComponent', () => {
  let component: WitchedRefreshComponent;
  let fixture: ComponentFixture<WitchedRefreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WitchedRefreshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WitchedRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
