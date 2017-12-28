import { filter } from "rxjs/operator/filter";
import { ConfigValue } from "./../../../_helpers/config-value";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import {
  Title,
  DomSanitizer,
  SafeResourceUrl
} from "@angular/platform-browser";
import { Location } from "@angular/common";

@Component({
  templateUrl: "bai-hoc.component.html"
})
export class BaiHocComponent implements OnInit {
  isCollapsed = true;
  private sub: any;
  public lessonItem: any;
  public listLesson: any = [];
  public url;
  public curent_url;
  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private http: HttpClient,
    private config: ConfigValue,
    public sanitizer: DomSanitizer,
    public location: Location
  ) {
    this.title.setTitle("3TPL | Bài học");
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.reloadPageWhenIDChange(params["id"]);
      console.log(params["id"]);

      this.curent_url = this.location.path();
    });
  }
  private reloadPageWhenIDChange(idLesson: string): void {
    this.http
      .get(this.config.url_port + `/lesson/${idLesson}`)
      .subscribe((dataLesson: any) => {
        this.lessonItem = dataLesson;
        this.getSafeUrl(this.lessonItem.lessonContent);
        console.log(this.lessonItem);
      });
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
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  getSafeUrl(url) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  ngAfterViewInit() {
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";

      if (d.getElementById(id)) {
        //if <script id="facebook-jssdk"> exists
        delete (<any>window).FB;
        fjs.parentNode.replaceChild(js, fjs);
      } else {
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, "script", "facebook-jssdk");
  }
}
