import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { KhoaHocComponent } from './home-khoa-hoc/khoa-hoc.component';
import { KhoaHocChiTietComponent } from './home-khoa-hoc-chi-tiet/khoa-hoc-chi-tiet.component';
import { MainHomeComponent } from './home-main/home-main.component';
import { ThongTinCaNhanComponent } from './home-thong-tin-ca-nhan/thong-tin-ca-nhan.component';
import { DemoDropdownsComponent } from './demo-dropdowns/demo-dropdowns.component';
import { DanhSachKhoaHocComponent } from './home-danh-sach-khoa-hoc/danh-sach-khoa-hoc.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,
children: [
    {
        path: 'khoa-hoc', component: KhoaHocComponent
    }, {
        path: 'khoa-hoc-chi-tiet', component: KhoaHocChiTietComponent
    }, {
        path: 'main' , component: MainHomeComponent
    }, {
        path : 'thong-tin-ca-nhan' , component: ThongTinCaNhanComponent
    }, {
        path: 'chi-tiet-khoa-hoc', component: KhoaHocChiTietComponent
    }, {
        path: 'danh-sach-khoa-hoc', component: DanhSachKhoaHocComponent
    }, {
        path: 'dome-dropdowns', component: DemoDropdownsComponent
    }
]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
