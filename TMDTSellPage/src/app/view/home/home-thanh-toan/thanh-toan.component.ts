import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: 'thanh-toan.component.html'
})

export class ThanhToanComponent implements OnInit {
    constructor(private title: Title) {
        this.title.setTitle('3TPL | Thanh toán');
    }

    ngOnInit() { }
}