import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { KhoaHocChiTietComponent } from './home-khoa-hoc-chi-tiet/khoa-hoc-chi-tiet.component';
import { MainHomeComponent } from './home-main/home-main.component';
import { ThongTinCaNhanComponent } from './home-thong-tin-ca-nhan/thong-tin-ca-nhan.component';
import { DemoDropdownsComponent } from './demo-dropdowns/demo-dropdowns.component';
import { DanhSachKhoaHocComponent } from './home-danh-sach-khoa-hoc/danh-sach-khoa-hoc.component';
import { NapTienComponent } from './home-nap-tien/nap-tien.component';
import { GioiThieuComponent } from './home-gioi-thieu/gioi-thieu.component';
import { DieuKhoanSuDungComponent } from './hone-dieu-khoan-su-dung/dieu-khoan-su-dung.component';
import { BaiHocComponent } from './home-bai-hoc/bai-hoc.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,
children: [
    {
        path: 'main' , component: MainHomeComponent
    }, {
        path : 'thong-tin-ca-nhan/:id' , component: ThongTinCaNhanComponent
    }, {
        path: 'chi-tiet-khoa-hoc/:id', component: KhoaHocChiTietComponent
    }, {
        path: 'danh-sach-khoa-hoc/:id', component: DanhSachKhoaHocComponent
    }, {
        path: 'nap-tien', component: NapTienComponent
    }, {
        path: 'gioi-thieu', component: GioiThieuComponent
    }, {
        path: 'dieu-khoan-su-dung', component: DieuKhoanSuDungComponent
    }, {
        path: 'dome-dropdowns', component: DemoDropdownsComponent
    }, {
        path: 'bai-hoc', component: BaiHocComponent
    }
]
  } ,  {
      path: 'role'
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
