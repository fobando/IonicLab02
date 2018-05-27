import { AtmServesProvider } from './../../providers/atm-serves/atm-serves';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-operations',
  templateUrl: 'operations.html'
})
export class OperationsPage {

  currentBalance : number;

  constructor(public navCtrl: NavController, public atmService : AtmServesProvider) {

  }

  ionViewCanEnter(){
    return this.atmService.accountValid;
  }

  ionViewWillEnter(){
    this.atmService.getCurrentBalance(this.atmService.accountNumber).subscribe(resp => {
      this.currentBalance = resp.currentBalance;
      this.atmService.accountName = resp.accountName;
    });
  }

  getAccountName() : string{
    return this.atmService.accountName;
  }

  getCurrentBalance() : number{
    return this.currentBalance;
  }

  goToDeposit(){
    this.navCtrl.push("DepositPage")
  }

  goToWithdawal(){
    this.navCtrl.push("WithdrawPage")
  }
}

