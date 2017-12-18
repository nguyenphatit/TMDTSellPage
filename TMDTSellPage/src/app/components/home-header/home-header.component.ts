import { AuthenticationService } from './../../_services/AuthenticationService';
import { RouterStateSnapshot } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-home-header',
    templateUrl: 'home-header.component.html',
    styleUrls: ['home-header.component.css']
})

export class HomeHeaderComponent implements OnInit {
  isLogin = true;
  isShow = false;

    effectNavbar = false;
    public megamenu = true; // hien thi menu khi thu nhỏ
    @HostListener('window:resize', ['$event'])
    onResize(event) {
     // console.log(event.target.innerWidth);
      if (event.target.innerWidth < 990 ) {
          this.megamenu = false ;
      } else {
          this.megamenu = true;
      }
    }
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 600) {
            this.effectNavbar =  true;
        } else {
         this.effectNavbar = false;
        }
      //  console.log(this.navIsFixed +  ' -'  + number)
      }
    constructor( public  authenticationService: AuthenticationService) { }

    ngOnInit() {
   this.isLogin = this.authenticationService.checkLogin();
   console.log(this.isLogin +'login');
        if ( window.innerWidth < 990 ) {
            this.megamenu = false;
        } else {
            this.megamenu = true;
        }
    }
}
