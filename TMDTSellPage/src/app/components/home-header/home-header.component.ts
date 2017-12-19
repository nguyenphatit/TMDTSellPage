import { ConfigValue } from './../../_helpers/config-value';
import { User } from './../../_models/User';
import { Component, OnInit, HostListener } from '@angular/core';
import { RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../../_services/AuthenticationService';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home-header',
    templateUrl: 'home-header.component.html',
    styleUrls: ['home-header.component.css']
})

export class HomeHeaderComponent implements OnInit {
    isloading = true; // hiệu ứng loading .. pages
    isLogin = false; // kiểm tra người dùng đăng nhập chưa
    // isShow = false;
    effectNavbar = false; // khi lăng chuột xuống menu nhỏ lai
    public megamenu = true; // hien thi menu khi thu nhỏ
    public user: User;
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 990) {
            this.megamenu = false;
        } else {
            this.megamenu = true;
        }
    }
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 600) {
            this.effectNavbar = true;
        } else {
            this.effectNavbar = false;
        }
    }
    constructor(
        private router: Router,
        private auth: AuthenticationService,
        private http: HttpClient,
        private config: ConfigValue) { }

    ngOnInit() {
        this.refrershToken();
        if (window.innerWidth < 990) {
            this.megamenu = false;
        } else {
            this.megamenu = true;
        }
    }
    public login(): void {
        this.router.navigate(['/pages/dang-nhap'], { queryParams: { 'returnUrl': this.router.routerState.snapshot.url } });
    }
    public logout(): void {
        this.auth.logout();
        this.refrershToken();
        this.isloading = true;
        setTimeout(() => {
            this.isloading = false;
        }, 500);
    }
    public refrershToken(): void {
        this.isloading = true;
        this.auth.refreshToken().subscribe( // kiểm tra người dùng đã đăng nhập chưa
            data => {
                this.auth.getInformation().subscribe( (user: User) => {
                    this.user = user ;
                });
                this.isLogin = true;
                this.isloading = false;
            }, (err: HttpErrorResponse) => {
                this.isLogin = false;
                this.isloading = false;
            }
        );
    }
}
