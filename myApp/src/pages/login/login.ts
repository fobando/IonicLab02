import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingCmp, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AtmServesProvider } from '../../providers/atm-serves/atm-serves';
import { TabsPage} from '../../pages/tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  myForm : FormGroup;

  constructor(public navCtrl: NavController,
              public loadCtrl : LoadingController,
              public atmService : AtmServesProvider,
              public toastCtrl : ToastController,
              public alertCtrl : AlertController,
              public navParams: NavParams) {

    this.myForm = new FormGroup({
      accountNumber : new FormControl('',Validators.required),
      pinNumber : new FormControl('',Validators.required)
    });
  }

  doLogin() {
    let loader = this.loadCtrl.create({ content: 'Authenticating' });
    loader.present();

    let accountNumber = this.myForm.get("accountNumber").value;
    let pinNumber = this.myForm.get("pinNumber").value;

    this.atmService.setAccountNumber(accountNumber, pinNumber).then(
      (succ) => {
        loader.dismiss()
        let alert = this.alertCtrl.create({
          title: 'Form Submitted!',
          subTitle: 'Account number ' + accountNumber,
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(TabsPage);
      },
      (err) => {
        let toast = this.toastCtrl.create({ message: 'Error logging in', duration: 30000 });
        loader.dismiss();
        toast.present();
      }
    );

//    let alert = this.loadCtrl.create({
//      title: 'Form Submitted!',
//      subTitle: 'Account number ' + accountNumber,
//      buttons: ['OK']
//    });
//    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
