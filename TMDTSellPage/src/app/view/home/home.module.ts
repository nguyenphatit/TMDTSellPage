import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { KhoaHocComponent } from './home-khoa-hoc/khoa-hoc.component';
import { KhoaHocChiTietComponent } from './home-khoa-hoc-chi-tiet/khoa-hoc-chi-tiet.component';
import { MainHomeComponent } from './home-main/home-main.component';
import { ThongTinCaNhanComponent } from './home-thong-tin-ca-nhan/thong-tin-ca-nhan.component';
import { HomeComponent } from './home.component';
import { DemoDropdownsComponent } from './demo-dropdowns/demo-dropdowns.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DanhSachKhoaHocComponent } from './home-danh-sach-khoa-hoc/danh-sach-khoa-hoc.component';
import { NapTienComponent } from './home-nap-tien/nap-tien.component';
import { GioiThieuComponent } from './home-gioi-thieu/gioi-thieu.component';


@NgModule({
    imports: [
        HomeRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BsDropdownModule.forRoot(),
        AccordionModule.forRoot()
    ],
    exports: [],
    declarations: [
        HomeComponent,
        KhoaHocComponent,
        KhoaHocChiTietComponent,
        MainHomeComponent,
        ThongTinCaNhanComponent,
        DanhSachKhoaHocComponent,
        NapTienComponent,
        GioiThieuComponent,
        DemoDropdownsComponent
    ],
    providers: [],
})
export class HomeModule { }
