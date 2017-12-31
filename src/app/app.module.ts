import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase/app';

import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireDatabase} from "angularfire2/database";
import {MobxAngularModule} from "mobx-angular";
import StoreModule from "../stores/module";
import {LoginPage} from "../pages/login/login";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCdoC7w2w6JLlhltgwz786YUQNj1lgAdPI",
      authDomain: "sales-performance-moni.firebaseapp.com",
      databaseURL: "https://sales-performance-moni.firebaseio.com",
      projectId: "sales-performance-moni",
      storageBucket: "sales-performance-moni.appspot.com",
      messagingSenderId: "359663928929"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MobxAngularModule,
    StoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
