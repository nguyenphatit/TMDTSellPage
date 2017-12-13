import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { QuenMatKhauComponent } from './quen-mat-khau/quen-mat-khau.component';
import { DoiMatKhauComponent } from './doi-mat-khau/doi-mat-khau.component';

@NgModule({
    imports: [PagesRoutingModule],
    exports: [],
    declarations: [
        DangKyComponent,
        DangNhapComponent,
        QuenMatKhauComponent,
        DoiMatKhauComponent
    ],
    providers: [],
})
export class PagesModule { }
