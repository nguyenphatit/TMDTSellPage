import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { QuenMatKhauComponent } from './quen-mat-khau/quen-mat-khau.component';


const routes: Routes = [
  { path: 'dang-ky', component: DangKyComponent },
  { path: 'dang-nhap', component: DangNhapComponent },
  { path: 'quen-mat-khau', component: QuenMatKhauComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
