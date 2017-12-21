import { Topic } from "./../../../_models/Topic";
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
    // tslint:disable-next-line:no-var-keyword

    this.http
      .get(this.config.url_port + `/users/course/${idCourse}`)
      .subscribe(data => {
        this.courseItem = data;
        const authorID = this.courseItem.author.userID;
        this.topic = this.courseItem.topic;
        // lấy thông tin author
        this.http
          .get(this.config.url_port + `/users/course/author/${authorID}`)
          .subscribe(dataAuthor => {
            this.author = dataAuthor;
            console.log(this.author);
          });
        // lây thông tin khóa học liên quan
        this.http
          .get(
            this.config.url_port +
              `/users/course/${this.courseItem.courseID}/relationship?page=1&size=100`
          )
          .subscribe((dataCourseRelationship: any) => {
            this.listCourseRelationship = dataCourseRelationship.listOfResult;
          });
      });

       this.http.get(this.config.url_port + `/user/course/${idCourse}/chapter`).subscribe(data => {
         console.log(data);
       });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  private sub: any;
  public courseItem: any = {};
  public author: any = {};
  public topic: any = {};
   public listCourseRelationship: any = [];
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
      console.log(params['id']);
    });
  }
}
