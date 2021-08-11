import { Component, Input, OnInit } from '@angular/core';
import { TopbarOptions } from '../model/topbarOptions';

@Component({
  selector: 'be-witched-topbar',
  templateUrl: './witched-topbar.component.html',
  styleUrls: ['./witched-topbar.component.scss'],
})
export class WitchedTopbarComponent implements OnInit {
  @Input('beOptions')
  options!: TopbarOptions;

  constructor() {}

  ngOnInit(): void {}
}
