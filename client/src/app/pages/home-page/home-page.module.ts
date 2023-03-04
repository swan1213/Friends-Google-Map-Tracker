import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { FriendModule } from 'src/app/features/friends/friend.module';
import { LayoutModule } from 'src/app/features/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CoreModule, SharedModule, LayoutModule, FriendModule, HomePageRoutingModule],
})
export class HomePageModule {}
