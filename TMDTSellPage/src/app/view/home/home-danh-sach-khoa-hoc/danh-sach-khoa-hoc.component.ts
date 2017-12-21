import { ConfigValue } from "./../../../_helpers/config-value";
import { Topic } from "./../../../_models/Topic";
import { DataTopic } from "./../../../_helpers/mocktest/DataTopic";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { DataCourse } from "../../../_helpers/mocktest/DataCourse";

@Component({
  templateUrl: "danh-sach-khoa-hoc.component.html"
})
export class DanhSachKhoaHocComponent implements OnInit, OnDestroy {
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  private sub: any;
  public topicItem: any = {};
  public listCourse: any = [];
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
      this.reloadPageWhenIDChange(params["id"]);
    });
  }
  public reloadPageWhenIDChange(idTopic: string): void {
    // tslint:disable-next-line:no-unused-expression
    new DataCourse();

    this.http
      .get(this.config.url_port + `/users/topic/${idTopic}`)
      .subscribe(data => {
        this.topicItem = data;
      });
    this.http
      .get(
        this.config.url_port + `/users/topic/${idTopic}/course?page=1&size=100`
      )
      .subscribe(data => {
        const tmp: any = data;
        this.listCourse = tmp.listOfResult;
console.log(data);
      });
  }
}
