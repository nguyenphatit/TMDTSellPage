import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: 'main-home.component.html'
})

export class MainHomeComponent implements OnInit {

    constructor(private title: Title) {
        this.title.setTitle('3TPL | Trang chủ');
    }

    ngOnInit() { }
}