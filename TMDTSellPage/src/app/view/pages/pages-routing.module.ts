import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { QuenMatKhauComponent } from './quen-mat-khau/quen-mat-khau.component';
import { DoiMatKhauComponent } from './doi-mat-khau/doi-mat-khau.component';
import { Error404Component } from './error-404/error-404.component';


const routes: Routes = [
  { path: 'dang-ky', component: DangKyComponent },
  { path: 'dang-nhap', component: DangNhapComponent },
  { path: 'quen-mat-khau', component: QuenMatKhauComponent },
  { path: 'doi-mat-khau', component: DoiMatKhauComponent },
  { path: 'error-404', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
