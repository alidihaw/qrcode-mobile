import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sidebar } from './sidebar';

@NgModule({
  declarations: [
    Sidebar,
  ],
  imports: [
    IonicPageModule.forChild(Sidebar),
  ],
  exports: [
    Sidebar
  ]
})
export class SidebarModule {}
