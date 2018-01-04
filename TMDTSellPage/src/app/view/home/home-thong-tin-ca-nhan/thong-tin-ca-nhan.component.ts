import { OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ConfigValue } from './../../../_helpers/config-value';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'thong-tin-ca-nhan.component.html'
})
export class ThongTinCaNhanComponent implements OnInit, OnDestroy {
  public isShowProfile = false;
  public authorItem: any;
  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private http: HttpClient,
    private config: ConfigValue
  ) {
    this.title.setTitle('3TPL | Thông tin cá nhân');
  }
  log(event: boolean) {
    console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.reloadPageWhenIDChange(params['id']);
    });
  }
  private reloadPageWhenIDChange(idAuthor: string): void {
    this.http
      .get(this.config.url_port + `/users/course/author/${idAuthor}`)
      .subscribe((data: any) => {
        this.authorItem = data;
        console.log(data);
      });
    this.http
      .get(
        this.config.url_port +
          `/users/course/${idAuthor}?sortType=desc&limitRecord=4`
      )
      .subscribe((data: any) => {
        this.featuredCourse = data;
      });
    this.http
      .get(
        this.config.url_port +
          `/users/course/${idAuthor}?sortPropertie=price&page=1&size=100`
      )
      .subscribe((data: any) => {
        this.listCourseItem = data.listOfResult;
        console.log(this.listCourseItem);
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  private sub: any;
  public featuredCourse: any;
  public listCourseItem: any;
}
