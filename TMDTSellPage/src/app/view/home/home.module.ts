import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { KhoaHocChiTietComponent } from './home-khoa-hoc-chi-tiet/khoa-hoc-chi-tiet.component';
import { MainHomeComponent } from './home-main/home-main.component';
import { ThongTinCaNhanComponent } from './home-thong-tin-ca-nhan/thong-tin-ca-nhan.component';
import { HomeComponent } from './home.component';
import { DemoDropdownsComponent } from './demo-dropdowns/demo-dropdowns.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DanhSachKhoaHocComponent } from './home-danh-sach-khoa-hoc/danh-sach-khoa-hoc.component';
import { NapTienComponent } from './home-nap-tien/nap-tien.component';
import { GioiThieuComponent } from './home-gioi-thieu/gioi-thieu.component';
import { DieuKhoanSuDungComponent } from './hone-dieu-khoan-su-dung/dieu-khoan-su-dung.component';
import { BaiHocComponent } from './home-bai-hoc/bai-hoc.component';


@NgModule({
    imports: [
        HomeRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BsDropdownModule.forRoot(),
        AccordionModule.forRoot(),
        CollapseModule.forRoot()
    ],
    exports: [],
    declarations: [
        HomeComponent,
        KhoaHocChiTietComponent,
        MainHomeComponent,
        ThongTinCaNhanComponent,
        DanhSachKhoaHocComponent,
        NapTienComponent,
        GioiThieuComponent,
        DieuKhoanSuDungComponent,
        DemoDropdownsComponent,
        BaiHocComponent
    ],
    providers: [],
})
export class HomeModule { }
