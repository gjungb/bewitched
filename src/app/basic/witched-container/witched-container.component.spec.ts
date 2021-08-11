import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchedContainerComponent } from './witched-container.component';

describe('WitchedContainerComponent', () => {
  let component: WitchedContainerComponent;
  let fixture: ComponentFixture<WitchedContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WitchedContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WitchedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
