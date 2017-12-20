import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: 'danh-sach-khoa-hoc.component.html'
})

export class DanhSachKhoaHocComponent implements OnInit {
    constructor(private title: Title) {
        this.title.setTitle('3TPL | Danh sách khóa học');
     }

    ngOnInit() { }
}