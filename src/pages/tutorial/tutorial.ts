import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class Tutorial {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu:MenuController) {
      this.menu.swipeEnable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tutorial');
  }

  goBack() {
    this.navCtrl.pop();
  }
}
