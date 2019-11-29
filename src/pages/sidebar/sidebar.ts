import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, NavController, LoadingController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Tabs } from '../tabs/tabs';
import { Tutorial } from '../tutorial/tutorial';

@Component({
  selector: 'page-sidebar',
  templateUrl: 'sidebar.html',
})
export class Sidebar {
  @ViewChild(Nav) nav: Nav;
  loading

  websites: FirebaseListObservable<any[]>;

  private rootPage;
  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public loadingCtrl: LoadingController,
    public db: AngularFireDatabase) {
    this.websites = this.db.list('/websites');
    this.rootPage = Tabs;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sidebar');
  }

  tutorial() {
    this.menu.close();
    this.nav.push(Tutorial);
  }
}
