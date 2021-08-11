import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchedActionsComponent } from './witched-actions.component';

describe('WitchedActionsComponent', () => {
  let component: WitchedActionsComponent;
  let fixture: ComponentFixture<WitchedActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WitchedActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WitchedActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
