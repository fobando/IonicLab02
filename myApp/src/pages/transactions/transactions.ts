import { AtmTransaction } from './../../app/models/atm.interface';
import { AtmServesProvider } from './../../providers/atm-serves/atm-serves';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html'
})
export class TransactionsPage {
transactions : Array<AtmTransaction> = [];
  constructor(public navCtrl: NavController, public atmService : AtmServesProvider) {

  }


  ionViewWillEnter(){
    this.atmService.getLastOperations(this.atmService.getAccountNumber()).subscribe( data => {
        this.transactions = data.transactions;
    });
  }
  goToDetails(item: AtmTransaction){
    this.navCtrl.push("TransactionDetailPage", {item: item})
  }
}
