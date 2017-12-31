import {observable, action, computed} from 'mobx-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {Injectable} from "@angular/core";
import firebase from 'firebase/app';

@Injectable()
export default class AuthStore {

  @observable isLoading = false;
  @observable private token = '';

  constructor(private fbAuth:AngularFireAuth) {
    this.fbAuth.authState
      .map((user:firebase.User) => {

        user.getIdToken()
          .then(token => this.token = token);

        return user;
      })
      .subscribe();
  }

  @action
  login(username:string, password:string) {
    this.isLoading = true;
    return this.fbAuth.auth.signInWithEmailAndPassword(username, password)
      .then(res => {
        this.isLoading = false;
        return res;
      })
      .catch(err => {
        this.isLoading = false;
        throw err;
      })
  }

  @computed get isLoggedIn() {

    return !!this.token;
  }
}
