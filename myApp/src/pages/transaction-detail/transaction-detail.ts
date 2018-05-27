import { AtmTransaction } from './../../app/models/atm.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TransactionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-detail',
  templateUrl: 'transaction-detail.html',
})
export class TransactionDetailPage {

  transaction : AtmTransaction;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.transaction = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionDetailPage');
  }

  dismissThis(){
    this.navCtrl.pop();
  }

}
