import {Injectable} from "@angular/core";
import AuthStore from "./auth";

@Injectable()
export default class AppState {
  constructor(
    public authStore:AuthStore
  ) {}
}
