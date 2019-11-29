import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';

import { Sidebar } from '../pages/sidebar/sidebar';
import { Tutorial } from '../pages/tutorial/tutorial';

import { Tabs } from '../pages/tabs/tabs';
import { Home } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../firebase/firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { CustomFormsModule } from 'ng2-validation'

// BARCODE
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// RXJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@NgModule({
  declarations: [
    MyApp,
    Sidebar,
    Tutorial,
    Tabs,
    Home
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CustomFormsModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      platforms: {
        android: {
          tabsPlacement: 'top'
        },
        ios: {
          tabsPlacement: 'top'
        },
        windows: {
          tabsPlacement: 'top'
        }
      }
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    Sidebar,
    Tutorial,
    Tabs,
    Home
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
