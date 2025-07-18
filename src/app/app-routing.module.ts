import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login.component'; // นำเข้า LoginComponent
import { ProductCardListComponent } from './components/product-card-list.component';
import { ProductFormComponent } from './components/product-form.component';
import { ProductListComponent } from './components/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent, pathMatch: 'full' },  // หน้าเริ่มต้น
  { path: 'cards', component: ProductCardListComponent },  // หน้าบัตรสินค้า
  { path: 'form', component: ProductFormComponent },  // หน้าฟอร์มเพิ่มสินค้าหรืออื่นๆ
  { path: 'login', component: LoginComponent },  // หน้าล็อกอิน
  { path: '**', redirectTo: '', pathMatch: 'full' }  // เส้นทางผิดหรือไม่พบหน้า
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
