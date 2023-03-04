import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { FriendMapComponent } from './components/friend-map/friend-map.component';
import { FriendCardComponent } from './components/friend-card/friend-card.component';
import { FriendSearchComponent } from './components/friend-search/friend-search.component';
import { FriendTrackingStatusComponent } from './components/friend-tracking-status/friend-tracking-status.component';

@NgModule({
  declarations: [
    FriendMapComponent,
    FriendCardComponent,
    FriendSearchComponent,
    FriendTrackingStatusComponent,
  ],
  imports: [CoreModule],
  exports: [
    FriendMapComponent,
    FriendCardComponent,
    FriendSearchComponent,
    FriendTrackingStatusComponent,
  ],
})
export class FriendModule {}
