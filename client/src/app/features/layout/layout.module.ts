import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { LayoutLoadingComponent } from './components/layout-loading/layout-loading.component';
import { NavbarDefaultComponent } from './components/navbar-default/navbar-default.component';

@NgModule({
  declarations: [
    LayoutLoadingComponent,
    NavbarDefaultComponent,
  ],
  imports: [CoreModule],
  exports: [
    LayoutLoadingComponent,
    NavbarDefaultComponent,
  ],
})
export class LayoutModule {}
