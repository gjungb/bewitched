import { Component, Input, OnInit } from '@angular/core';
import { TopbarOptions } from '../model/topbar-options';

@Component({
  selector: 'be-witched-topbar',
  templateUrl: './witched-topbar.component.html',
  styleUrls: ['./witched-topbar.component.scss'],
})
export class WitchedTopbarComponent implements OnInit {
  @Input('beTopbarOptions')
  options?: TopbarOptions;

  constructor() {}

  ngOnInit(): void {}
}
