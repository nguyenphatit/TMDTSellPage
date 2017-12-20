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
      const idAuthor: string = params['id'];
      this.reloadPageWhenIDChange(idAuthor);
    });
  }
  private reloadPageWhenIDChange(idAuthor: string): void {
    this.http
      .get(this.config.url_port + `/user/${idAuthor}`)
      .subscribe(data => {
       console.log(data);
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  private sub: any;
}
