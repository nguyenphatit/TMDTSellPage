import { DemoComponent } from './home-demo/demo.component';
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
import { GioiThieuComponent } from './home-gioi-thieu/gioi-thieu.component';
import { DieuKhoanSuDungComponent } from './hone-dieu-khoan-su-dung/dieu-khoan-su-dung.component';
import { BaiHocComponent } from './home-bai-hoc/bai-hoc.component';
import { ThanhToanComponent } from './home-thanh-toan/thanh-toan.component';
import { NapTheComponent } from './home-nap-the/nap-the.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LichSuGiaoDichComponent } from './home.lich-su-giao-dich/lich-su-giao-dich.component';


@NgModule({
    imports: [
        HomeRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BsDropdownModule.forRoot(),
        AccordionModule.forRoot(),
        CollapseModule.forRoot(),
        CarouselModule.forRoot()
    ],
    exports: [],
    declarations: [
        HomeComponent,
        KhoaHocChiTietComponent,
        MainHomeComponent,
        ThongTinCaNhanComponent,
        DanhSachKhoaHocComponent,
        GioiThieuComponent,
        NapTheComponent,
        DieuKhoanSuDungComponent,
        DemoDropdownsComponent,
        BaiHocComponent,
        ThanhToanComponent,
        LichSuGiaoDichComponent
    ],
    providers: [],
})
export class HomeModule { }
