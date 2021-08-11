import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WitchedActionsComponent } from './witched-actions/witched-actions.component';
import { WitchedContainerComponent } from './witched-container/witched-container.component';
import { WitchedContentComponent } from './witched-content/witched-content.component';
import { WitchedHeadlineComponent } from './witched-headline/witched-headline.component';
import { WitchedLinkComponent } from './witched-link/witched-link.component';
import { WitchedMenuItemComponent } from './witched-menu-item/witched-menu-item.component';
import { WitchedMenuComponent } from './witched-menu/witched-menu.component';
import { WitchedRefreshComponent } from './witched-refresh/witched-refresh.component';
import { WitchedTopbarComponent } from './witched-topbar/witched-topbar.component';

@NgModule({
  declarations: [
    WitchedTopbarComponent,
    WitchedHeadlineComponent,
    WitchedActionsComponent,
    WitchedRefreshComponent,
    WitchedLinkComponent,
    WitchedMenuComponent,
    WitchedContentComponent,
    WitchedContainerComponent,
    WitchedMenuItemComponent,
  ],
  imports: [CommonModule],
  exports: [WitchedContainerComponent],
})
export class BasicModule {}
