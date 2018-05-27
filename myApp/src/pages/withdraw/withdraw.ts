import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, Toast } from 'ionic-angular';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AtmServesProvider } from '../../providers/atm-serves/atm-serves';
import { OperationsPage } from '../../pages/operations/operations';

/**
 * Generated class for the WithdrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-withdraw',
  templateUrl: 'withdraw.html',
})
export class WithdrawPage {

  withdrawForm : FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public atmService: AtmServesProvider,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController) {

    this.withdrawForm = new FormGroup({
                  amount : new FormControl('',Validators.required)
                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawPage');
  }

  Withdraw(){
    let amount = this.withdrawForm.get("amount").value;
    let accountNumber = this.atmService.accountNumber;

    console.log('Wth Amount:' + amount);
    console.log('Wth Acccount:' + accountNumber);

    let toast : Toast;

    this.atmService.withDraw(accountNumber,amount).then(
      succ => {

        if (succ.status == 0) {

          let alert = this.alertCtrl.create({
            title: 'Withdrawal Successful',
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
          message: 'Error making the withdrawal.',
          position: 'middle',
          showCloseButton: true,
          closeButtonText: 'Try Again'
        });

        toast.present();
      }
    );

  }

}
