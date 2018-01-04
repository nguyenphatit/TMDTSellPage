import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'demo-dropdowns.component.html'
})

export class DemoDropdownsComponent implements OnInit {
    
    constructor(private router: Router) {
        swal({
            position: 'top-end',
            type: 'success',
            title: ' Chúc mừng bạn đã đóng góp 5 điểm cho khóa học này!',
            showConfirmButton: false,
            timer: 1000,
        });

        swal({
            title: 'Bạn cần phải đăng nhập!',
            confirmButtonText:  'Đăng nhập ngay',
            cancelButtonText:  'Đóng',
            showCancelButton: true,
            showCloseButton: true,
          }).then((result) => {
            if (result.value) {
                this.router.navigate(['/pages/dang-nhap']);
            }
          });

        swal({
            title: 'Bạn cần phải đăng nhập!',
            showCancelButton: true,
            confirmButtonText: 'Đăng nhập ngay!',
            cancelButtonText: 'Hủy'
          }).then((result) => {
            if (result.value) {
                this.router.navigate(['/pages/dang-nhap']);
            }
          });

        
     }

    ngOnInit() { }
}