import { Router, ActivatedRouteSnapshot } from "@angular/router";
import { AuthenticationService } from "./../../../_services/AuthenticationService";
import { Component, OnInit } from "@angular/core";
import { ConfigValue } from "../../../_helpers/config-value";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
  templateUrl: "dang-nhap.component.html"
})
export class DangNhapComponent implements OnInit {
  loginFormGroup: FormGroup;
  constructor(
    private http: HttpClient,
    private config: ConfigValue,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    // localStorage.romeve(this.config.token);
    this.loginFormGroup = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        // tslint:disable-next-line:max-line-length
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ]),
      password: new FormControl("", [
        Validators.minLength(8),
        Validators.required
      ]),
      forword: new FormControl(true)
    });
  }
  public login(): void {
    this.authenticationService
      .login(
        this.loginFormGroup.value.email,
        this.loginFormGroup.value.password
      )
      .subscribe(
        data => {
          this.router.navigate(["/home"]);

          console.log(data);
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          if (err.status === 403) {
            console.log("Tài khoản hoặc mật khẩu không đúng!");
          }
        }
      );
  }
}
