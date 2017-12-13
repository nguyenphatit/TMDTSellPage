import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'thong-tin-ca-nhan.component.html'
})

export class ThongTinCaNhanComponent implements OnInit {
    public isShowProfile = false;
    constructor() {
     }
     log(event: boolean) {
        console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
      }
    ngOnInit() { }
}