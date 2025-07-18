import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: any;

  constructor(private router: Router) {}

  // ฟังก์ชันเพิ่มสินค้าไปยังตะกร้า
  addToCart() {
    console.log(`${this.product.name} added to cart!`);
    // คุณสามารถเพิ่ม logic สำหรับการเพิ่มสินค้าลงในตะกร้าได้ที่นี่
  }

  // ฟังก์ชันลบสินค้า
  deleteProduct() {
    console.log(`${this.product.name} deleted!`);
    // คุณสามารถเพิ่ม logic สำหรับการลบสินค้าจากรายการได้ที่นี่
  }

  // ฟังก์ชันย้อนกลับไปหน้า /
  goBack() {
    this.router.navigate(['/']);
  }
}
