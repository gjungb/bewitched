import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchedMenuItemComponent } from './witched-menu-item.component';

describe('WitchedMenuItemComponent', () => {
  let component: WitchedMenuItemComponent;
  let fixture: ComponentFixture<WitchedMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WitchedMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WitchedMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
