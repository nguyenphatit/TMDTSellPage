import { Topic } from './../../../_models/Topic';
import { OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfigValue } from "./../../../_helpers/config-value";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  templateUrl: "khoa-hoc-chi-tiet.component.html"
})
export class KhoaHocChiTietComponent implements OnInit, OnDestroy {
  private reloadPageWhenIDChange(idCourse: string): void {
    this.http
      .get(this.config.url_port + `/users/course/${idCourse}`)
      .subscribe(data => {
        this.courseItem = data;
         this.author = this.courseItem.author;
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  private sub: any;
  public courseItem: any = {};
  public author: any  = {};
   public topic: any = {};
  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private http: HttpClient,
    private config: ConfigValue
  ) {
    this.title.setTitle("3TPL | Chi tiết khóa học");
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const idCourse: string = params["id"];
      this.reloadPageWhenIDChange(idCourse);
    });
  }
}
