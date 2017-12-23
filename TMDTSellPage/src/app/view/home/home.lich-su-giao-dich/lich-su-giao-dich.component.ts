import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: 'lich-su-giao-dich.component.html'
})

export class LichSuGiaoDichComponent implements OnInit {
    constructor(private title: Title) {
        this.title.setTitle('3TPL | Lịch sử giao dịch');
     }

    ngOnInit() { }
}