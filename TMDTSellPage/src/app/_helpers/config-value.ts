import { Injectable } from '@angular/core';

@Injectable()
export class ConfigValue {
     cart = 'cart';
     role_admin = 'ROLE_ADMIN';
     role_user = 'ROLE_USER';
     token = 'token';
<<<<<<< HEAD
     url_port =  'http://127.0.0.1:8080'; // chế độ thật
    // url_port = 'http://192.168.1.103';
=======
      url_port =  'http://127.0.0.1:80'; // chế độ thật
    // url_port = 'http://10.5.50.74:8080';
>>>>>>> origin/master
    remember = 'remember';

    // dường link res
    // AuthenticationRest.class
     auth_login = '/auth/login';
     auth_refresh = '/auth/refresh';
}
