import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'demo.component.html'
})
export class DemoComponent implements OnInit {
    isCollapse: false;

    collapsed(event: any): void {
        console.log(event);
    }

    expanded(event: any): void {
        console.log(event);
    }

    constructor() { }

    ngOnInit() {

    }

}