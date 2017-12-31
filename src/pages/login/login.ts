import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import AppState from "../../stores/appstate";
import {HomePage} from "../home/home";

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appState: AppState
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {

    const {authStore} = this.appState;

    authStore.login("admin@sperm.com", "admin123")
      .then(res => {
        if (authStore.isLoggedIn) {
          this.navCtrl.setRoot(HomePage);
        }
      })
  }

}
