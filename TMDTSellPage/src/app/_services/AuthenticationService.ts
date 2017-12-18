import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { ConfigValue } from "../_helpers/config-value";
@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient, private config: ConfigValue) {}
  login(username: string, password: string) {
    console.log(this.config.url_port);
    return this.http
      .post<any>(this.config.url_port + "/auth/login", {
        email: username,
        password: password
      })
      .map(user => {
        console.log(user);
        if (user && user.access_token) {
          localStorage.setItem(
            this.config.token,
            JSON.stringify(user.access_token)
          );
        }
        return user;
      });
  }
  logout() {
    localStorage.removeItem(this.config.token);
  }
  public checkLogin(): boolean {
    let result: boolean = false;
    this.http.get(this.config.url_port + "/auth/refresh").subscribe(
      data => {
        console.log(data)
        let user: any = {};
        user = data;
        localStorage.setItem(
          this.config.token,
          JSON.stringify(user.access_token)
        );
        result = true;
      },
      (err: HttpErrorResponse) => {
        result = false;
      }
    );
    return result;
  }
}
