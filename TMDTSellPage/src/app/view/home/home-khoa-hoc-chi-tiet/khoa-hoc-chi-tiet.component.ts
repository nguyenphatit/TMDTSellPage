import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: 'khoa-hoc-chi-tiet.component.html'
})

export class KhoaHocChiTietComponent implements OnInit {
    constructor(private title: Title) {
        this.title.setTitle('3TPL | Chi tiết khóa học');
     }

    ngOnInit() { }
}