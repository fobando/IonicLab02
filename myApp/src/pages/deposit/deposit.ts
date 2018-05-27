import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, ToastController, Toast } from 'ionic-angular';
import { AtmServesProvider } from '../../providers/atm-serves/atm-serves';
import { OperationsPage } from '../../pages/operations/operations';
/**
 * Generated class for the DepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html',
})
export class DepositPage {
  depositForm : FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public atmService: AtmServesProvider,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController) {

    this.depositForm = new FormGroup({
      amount : new FormControl('',Validators.required)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositPage');
  }

  Deposit(){
    let amount = this.depositForm.get("amount").value;
    let accountNumber = this.atmService.accountNumber;

    console.log('Dep Amount:' + amount);
    console.log('Dep Acccount:' + accountNumber);

    let toast: Toast;

    this.atmService.deposit(accountNumber,amount).then(
      succ => {

        if (succ.status == 0) {

          let alert = this.alertCtrl.create({
            title: 'Deposit Successful',
            buttons: ['OK']
          });

          alert.present();
          this.navCtrl.push(OperationsPage);

        } else {

          toast = this.toastCtrl.create({
            message: succ.message,
            position: 'middle',
            showCloseButton: true,
            closeButtonText: 'Try Again'
          });

          toast.present();
        }
      },

      err =>{

        toast = this.toastCtrl.create({
          message: 'Error making the deposit.',
          position: 'top',
          showCloseButton: true,
          closeButtonText: 'Try Again'
        });

        toast.present();
      }
    );

  }

}
