import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchedContentComponent } from './witched-content.component';

describe('WitchedContentComponent', () => {
  let component: WitchedContentComponent;
  let fixture: ComponentFixture<WitchedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WitchedContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WitchedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
