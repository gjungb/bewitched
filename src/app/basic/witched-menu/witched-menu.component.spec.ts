import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchedMenuComponent } from './witched-menu.component';

describe('WitchedMenuComponent', () => {
  let component: WitchedMenuComponent;
  let fixture: ComponentFixture<WitchedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WitchedMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WitchedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
