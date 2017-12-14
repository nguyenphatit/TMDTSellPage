import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: 'khoa-hoc.component.html'
})

export class KhoaHocComponent implements OnInit {
    constructor(private title: Title) {
        this.title.setTitle('3TPL | Khóa học');
     }

    ngOnInit() { }
}