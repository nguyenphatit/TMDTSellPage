import { User } from './../../_models/User';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';
import { filter } from 'rxjs/operator/filter';
import { Role } from '../../_models/index';
@Injectable()
export class UserRestInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const users: any[]  = [];
        const temp = new User();
          temp.userID =  'ND1';
            temp.userName = ' Trương Tam Lang';
            temp.registrationDate =  {
              dayOfYear: 328,
              month: 'NOVEMBER',
               year: 2017,
               dayOfMonth: 24,
              dayOfWeek: 'FRIDAY',
              hour: 23,
              minute : 53,
              nano: 0,
              second: 35,
              monthValue: 11,
              chronology: {
                id: 'ISO',
                calendarType: 'iso8601'
              }
            };
            temp.email = 'lang.tt16@gmail.com';
            temp.avatar = 'https://drive.google.com/uc?id=0B27mfRY62YKZRDNxWWZHdl9aUjA';
            temp.password = '12345678';
            temp.score = 0 ;
            temp.status = 1;
            temp.address = 'Đồng Tháp';
            temp.phoneNumber = '01642222992';
            temp.permission  =  [
                {
                    roleID: 2,
                    roleName: 'ROLE_ADMIN'
                  },
                  {
                    roleID: 1,
                    roleName: 'ROLE_USER'
              }
            ];
            temp.lastPasswordResetDate =  {
                dayOfYear: 328,
                month: 'NOVEMBER',
                 year: 2017,
                 dayOfMonth: 24,
                dayOfWeek: 'FRIDAY',
                hour: 23,
                minute : 53,
                nano: 0,
                second: 35,
                monthValue: 11,
                chronology: {
                  id: 'ISO',
                  calendarType: 'iso8601'
                }
              };
              users.push(temp);
              return Observable.of(null).mergeMap(() => {
                //  đường dẫn và Method
                if (request.url.endsWith('/user/info') && request.method === 'GET') {
                    //  tìm thấy nếu có bất kỳ người dùng phù hợp với thông tin đăng nhập
                   // console.log(request.headers);
                    // console.log(request.headers.get('Authorization') + 'hihi ');
                    if (request.headers.get('Authorization') === 'fake-jwt-token') {
                        const filteredUsers = users.filter((user: User) => {
                            return user.email === 'lang.tt16@gmail.com';
                        });
                       // console.log(filteredUsers);
                        if (filteredUsers.length) {
                            // nếu chi tiết đăng nhập là hợp lệ trả lại 200 OK với các chi tiết người dùng và mã thông báo giả jwt
                            const user = filteredUsers[0];
                        return Observable.of(new HttpResponse({ status: 200, body: user }));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        return Observable.throw(  new HttpErrorResponse({status: 403, statusText: 'Erro Role login'}));
                    }
                }
                return next.handle(request);
            }}).materialize()
                .delay(500)
                .dematerialize();

          }
    }
    export let  UserRest = {
        // sử dụng phụ trợ giả để thay thế cho dịch vụ Http để phát triển phụ trợ
        provide: HTTP_INTERCEPTORS,
        useClass: UserRestInterceptor,
        multi: true
    };
