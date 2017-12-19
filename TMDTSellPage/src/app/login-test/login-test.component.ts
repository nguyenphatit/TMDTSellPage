import { ConfigValue } from './../_helpers/config-value';
import { AuthenticationService } from './../_services/AuthenticationService';
import { User } from './../_models/User';
import { UserService } from './../_services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { error } from 'util';
import { TopicCreation } from '../_models/index';
@Component({
    templateUrl: 'login-test.component.html'
})

export class LoginTestComponent implements OnInit {
    constructor(private http: HttpClient,
         private userService: UserService,
         private authenticationService: AuthenticationService,
         private congig: ConfigValue
        ) { }

    ngOnInit() {
        const user = new User();
        user.email = 'trinh';
        user.password = 'nhiyeudkvn';
        this.login();
        const tao =  new User();
        tao.email = 'lang.tt16@gmail.com';
        tao.password = 'nhiyeudkvn';
        tao.userName = 'lang.tt16@gmail.com';
        // this.http.post('/api/users', tao).subscribe(data => {
        //     console.log(data);
        // }, (err: HttpErrorResponse) => {
        //     console.log(err);
        // });
      }
     login() {
       // this.loading = true;

        this.authenticationService.login('vanthang1996@gmail.com', 'Thang123')
            .subscribe(
                data => {
                 //   this.router.navigate([this.returnUrl]);
                 console.log(data);
                 this.info();
                //  this.createTopic();
                },
                (err: HttpErrorResponse) => {
                  //  this.alertService.error(error);
                   // this.loading = false;
                   console.log(err);
                   if ( err.status === 403 ) {
                       console.log('Mật khẩu không đúng hihi ');
                   }
                });
    }
    info() {
        this.http.get(this.congig.url_port + '/user/info').subscribe(data => {
            console.log(data);
        }, (err: HttpErrorResponse ) => {
            console.log(err.statusText);
            console.log(err.error);
            if ( err.status === 401 ) {
                console.log('token het hang');
            }
        });
    }
    // createTopic() {
    //     const topic = new TopicCreation();
    //     topic.topicDescription = 'ỨNG DỤNG DA NỀN TẢNG';
    //     topic.topicName = 'React native mobile' ;
    //     topic.topicStatus = 1;
    //     this.http.post(this.congig.url_port + '/admin/topic', topic, {
    //         withCredentials: true,
    //         observe: 'response'
    //     } ).subscribe(
    //         data => {
    //             console.log(data);
    //         }, (err: HttpErrorResponse) => {
    //             console.log(err.error);
    //         }
    //     );
    // }
}
