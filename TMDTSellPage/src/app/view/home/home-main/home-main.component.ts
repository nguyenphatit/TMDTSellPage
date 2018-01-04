import { ConfigValue } from './../../../_helpers/config-value';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'main-home.component.html'
})
export class MainHomeComponent implements OnInit {
  listCourse: any;
  constructor(
    private title: Title,
    private http: HttpClient,
    private config: ConfigValue
  ) {
    this.title.setTitle('3TPL | Trang chủ');
  }

  ngOnInit() {
    // lấy thông tin các khóa học nổi bật
    this.http
      .get(this.config.url_port + `/users/courses-featured?page=1&size=4`)
      .subscribe((data: any) => {
        console.log(data);
         this.listCourse = data.listOfResult;
      });
  }

}
