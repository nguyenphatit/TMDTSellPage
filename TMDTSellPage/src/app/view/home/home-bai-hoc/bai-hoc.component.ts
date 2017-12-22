import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: 'bai-hoc.component.html'
})

export class BaiHocComponent implements OnInit {
    constructor(private title: Title) {
        this.title.setTitle('3TPL | Bài học');
    }

    ngOnInit() { }
}