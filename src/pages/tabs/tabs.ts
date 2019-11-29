import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { Home } from '../home/home';

@IonicPage()
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {

  Home: any = Home;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,public menu:MenuController) {
      this.menu.enable(true, 'Menu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
  }
}
