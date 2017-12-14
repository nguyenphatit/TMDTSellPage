import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: 'thong-tin-ca-nhan.component.html'
})

export class ThongTinCaNhanComponent implements OnInit {
    public isShowProfile = false;
    constructor(private title: Title) {
        this.title.setTitle('3TPL | Thông tin cá nhân');
    }
     log(event: boolean) {
        console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
      }
    ngOnInit() { }
}