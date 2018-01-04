import { HttpErrorResponse } from '@angular/common/http/';
import { filter } from 'rxjs/operator/filter';
import { ConfigValue } from './../../../_helpers/config-value';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {
  Title,
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  templateUrl: 'bai-hoc.component.html'
})
export class BaiHocComponent implements OnInit {
  isCollapsed = true;
  private sub: any;
  public lessonItem: any;
  public listLesson: any = [];
  public url;
  public curent_url;
  isShowButtonDonate = false;
  private idLesson;
  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private http: HttpClient,
    private config: ConfigValue,
    public sanitizer: DomSanitizer,
    public location: Location,
    private router: Router
  ) {
    this.title.setTitle('3TPL | Bài học');
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.reloadPageWhenIDChange(params['id']);
      console.log(params['id']);

      this.curent_url = this.location.path();
      window.scrollTo(0, 0);
    });
    if (this.lessonItem) {
      this.router.navigate(['/home']);
    }
  }
  private reloadPageWhenIDChange(idLesson: string): void {
    this.idLesson = idLesson;
    // is show button donate
    this.http
      .get(`${this.config.url_port}/user/lesson-is-non-commercial/${idLesson}`)
      .subscribe(
        (data: any) => {
          this.isShowButtonDonate = data.success === 1;
        },
        (err: HttpErrorResponse) => {
          this.isShowButtonDonate = false;
        }
      );
    this.http.get(this.config.url_port + `/lesson/${idLesson}`).subscribe(
      (dataLesson: any) => {
        this.lessonItem = dataLesson;
        this.getSafeUrl(this.lessonItem.lessonContent);
        console.log(this.lessonItem);
      },
      (err: HttpErrorResponse) => {
        this.lessonItem = null;
        console.log(' Không có khóa học nào hết!');
      }
    );
    this.http
      .get(this.config.url_port + `/lesson/relate/${idLesson}`)
      .subscribe((data: any) => {
        const tmp = data;
        this.listLesson = data;
        this.listLesson.forEach(element => {
          element.lessonContent = this.safeUrl(element.lessonContent);
        });
      });
  }
  safeUrl(url): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://drive.google.com/thumbnail?authuser=0&sz=w320&id=' + url
    );
  }
  getSafeUrl(url) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://drive.google.com/file/d/${url}/preview'
    );
  }
  goBack(): void {
    window.history.back();
  }
  ngAfterViewInit() {
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4';

      if (d.getElementById(id)) {
        // if <script id="facebook-jssdk"> exists
        delete (<any>window).FB;
        fjs.parentNode.replaceChild(js, fjs);
      } else {
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, 'script', 'facebook-jssdk');
  }

  public donate() {
    const body = {
      amount: 5,
      lessonID: this.idLesson
    };
    this.http.post(`${this.config.url_port}/payment/donate`, body).subscribe(
      (data: any) => {
        swal({
          position: 'top-end',
          type: 'success',
          title: ' Chúc mừng bạn đã đóng góp 5 điểm cho khóa học này!',
          showConfirmButton: false,
          timer: 1500,
      });
      },
      (err: HttpErrorResponse) => {
        if (err.status === 400) {
          alert('Donate tối thiểu 5d');
        } else if (err.status === 401) {
          swal({
            title: 'Bạn cần phải đăng nhập!',
            showCancelButton: true,
            confirmButtonText: 'Đăng nhập ngay!',
            cancelButtonText: 'Hủy'
          }).then((result) => {
            if (result.value) {
                this.router.navigate(['/pages/dang-nhap'], {
                  queryParams: { returnUrl: this.router.routerState.snapshot.url }
                });
            }
          });
        } else if (err.status === 406) {
          alert('Hiển thị bảng thông báo, không đủ tiền, nạp thêm ok/cancel');
        } else if (err.status === 404) {
          alert('Hiển thị thông báo không tìm thấy mục cần donate');
        }
      }
    );
  }
}
