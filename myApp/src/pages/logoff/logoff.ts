import { AtmServesProvider } from './../../providers/atm-serves/atm-serves';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-logoff',
  templateUrl: 'logoff.html'
})
export class LogoffPage {

  constructor(public navCtrl: NavController, public atmService : AtmServesProvider) {
    this.atmService.logOff();
    this.navCtrl.setRoot("LoginPage");
  }

}
