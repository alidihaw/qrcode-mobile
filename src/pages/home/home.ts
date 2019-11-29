import { Component } from '@angular/core';
import { AlertController, ToastController, MenuController, LoadingController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'app-home',
  templateUrl: 'home.html'
})
export class Home {

  websites: FirebaseListObservable<any[]>;
  results: FirebaseListObservable<any[]>;
  ScannedCode: any;
  
  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public menu: MenuController,
    public db: AngularFireDatabase,
    private barcodeScanner: BarcodeScanner) {
    this.menu.enable(true, 'Menu');
    this.websites = this.db.list('/websites');
    this.results = this.db.list('/results');
  }
  
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.ScannedCode = barcodeData.text;

      let toast = this.toastCtrl.create({
        message: 'Barcode Id : ' + barcodeData.text,
        duration: 3000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {
      });
      toast.present();

    }, (err) => {
      let toast = this.toastCtrl.create({
        message: err,
        duration: 3000,
        position: 'bottom'
      });
  
      toast.onDidDismiss(() => {
      });
      toast.present();
    });
  }

  save() {
    var timestamp = firebase.database.ServerValue.TIMESTAMP;
    this.results.push({
      barcode_id: this.ScannedCode,
      result_created: timestamp,
      result_updated: timestamp
    }).then(
      val => {
        this.ScannedCode = '';
      }
    );

    let toast = this.toastCtrl.create({
      message: 'Data telah tersimpan',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
    });
    toast.present();
  }

  cancel() {
    this.ScannedCode = '';
  }
}
