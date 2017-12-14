import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: 'nap-tien.component.html'
})

export class NapTienComponent implements OnInit {
    constructor(private title: Title) {
        this.title.setTitle('3TPL | Nạp tiền');
     }

    ngOnInit() { }
}