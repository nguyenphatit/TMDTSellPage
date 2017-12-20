import { Topic } from "./../../../_models/Topic";
import { DataTopic } from "./../../../_helpers/mocktest/DataTopic";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  templateUrl: "danh-sach-khoa-hoc.component.html"
})
export class DanhSachKhoaHocComponent implements OnInit, OnDestroy {
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  private sub: any;
  public topicItem: any;
  constructor(private title: Title, private route: ActivatedRoute) {
    this.title.setTitle("3TPL | Chi tiết khóa học");
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let idTopic: string = params["id"];
      this.reloadPageWhenIDChange(idTopic);
    });
  }
  ngOnde;
  public reloadPageWhenIDChange(idTopic: string): void {
    this.topicItem = new DataTopic().getTopicByID(idTopic);
    console.log(idTopic);
  }
}
