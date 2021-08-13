import { Platform } from '@angular/cdk/platform';
import { Component, Input, OnInit } from '@angular/core';
import { ContainerOptions } from '../model/container-options';

@Component({
  selector: 'be-witched-container',
  templateUrl: './witched-container.component.html',
  styleUrls: ['./witched-container.component.scss'],
})
export class WitchedContainerComponent implements OnInit {
  @Input('beContainerOptions')
  options!: ContainerOptions;

  constructor(private readonly platform: Platform) {}

  ngOnInit(): void {
    this.platform;
  }
}
