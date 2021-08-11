import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'be-witched-headline',
  templateUrl: './witched-headline.component.html',
  styleUrls: ['./witched-headline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WitchedHeadlineComponent implements OnInit {
  /**
   * The headline to be displayed
   */
  @Input('beHeadline')
  headline? = WitchedHeadlineComponent.name;

  constructor() {}

  ngOnInit(): void {}
}
