import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { QuenMatKhauComponent } from './quen-mat-khau/quen-mat-khau.component';
import { DoiMatKhauComponent } from './doi-mat-khau/doi-mat-khau.component';
import { Error404Component } from './error-404/error-404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [PagesRoutingModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule],
    exports: [],
    declarations: [
        DangKyComponent,
        DangNhapComponent,
        QuenMatKhauComponent,
        DoiMatKhauComponent,
        Error404Component
    ],
    providers: [],
})
export class PagesModule { }
