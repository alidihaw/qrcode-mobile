import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Sidebar } from '../pages/sidebar/sidebar';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;

  operators: FirebaseListObservable<any[]>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.initializeApp();
    this.rootPage = Sidebar;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(true);

      this.statusBar.backgroundColorByHexString('#001E49');
        this.splashScreen.hide();
        setTimeout(() => {
          this.splashScreen.hide();
        }, 100);
    });
  }
}
