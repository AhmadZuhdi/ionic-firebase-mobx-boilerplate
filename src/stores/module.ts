import {NgModule} from "@angular/core";
import AuthStore from "./auth";
import AppState from "./appstate";

@NgModule({
  providers: [
    AuthStore,
    AppState
  ]
})
export default class StoreModule {

}
