import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: 'nap-the.component.html'
})

export class NapTheComponent implements OnInit {
    constructor(private title: Title) {
        this.title.setTitle('3TPL | Nạp tiền');
     }

    ngOnInit() { }
}