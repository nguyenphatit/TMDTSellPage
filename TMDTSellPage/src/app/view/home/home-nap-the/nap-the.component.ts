import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigValue } from '../../../_helpers/config-value';

@Component({
    templateUrl: 'nap-the.component.html'
})

export class NapTheComponent implements OnInit {
    paymentId: any;
    token: any;
    payerID: any;
    money: number;
    oneAtATime: boolean = true;
    constructor(private title: Title, private activeRouter: ActivatedRoute, private http: HttpClient, private config: ConfigValue) {
        this.title.setTitle('3TPL | Nạp tiền');
    }

    ngOnInit() {
        this.paymentId = this.activeRouter.snapshot.queryParams['paymentId'] || null;
        this.token = this.activeRouter.snapshot.queryParams['token'] || null;
        this.payerID = this.activeRouter.snapshot.queryParams['PayerID'] || null;
        if (this.payerID && this.token && this.paymentId) {
            alert(this.payerID + '\n' + this.token + '\n' + this.payerID);
            // tslint:disable-next-line:max-line-length
            this.http.get(this.config.url_port + `/pay/success?paymentId=${this.paymentId}&token=${this.token}&PayerID=${this.payerID}`).subscribe((data: any) => {
                console.log(data);
            });
        }
    }
    public napTien() {
        if (!this.money) {
            alert('chưa nhập tiền!');
        } else {
            const tmpMoney: any = {
                payDecription: 'Nạp tiền',
                total: this.money
            };
            this.http.post(this.config.url_port + `/pay`, tmpMoney).subscribe((data: any) => {
                window.location.href = data.message;
            });
        }
    }
}