import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
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

  private username = "admin@sperm.com";
  private password = "admin123";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appState: AppState,
    public loading: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {

    const {authStore} = this.appState;

    const loading = this.loading.create();
    loading.present();

    authStore.login(this.username, this.password)
      .then(res => {
        loading.dismissAll();
        if (authStore.isLoggedIn) {
          this.navCtrl.setRoot(HomePage);
        }
      })
  }

}
