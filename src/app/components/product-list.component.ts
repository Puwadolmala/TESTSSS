import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filtered: any[] = [];
  category = '';  // หมวดหมู่ที่เลือก

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.api.getProducts().subscribe((data) => {
      this.products = data;
      this.filtered = data;
    });
  }

  // ฟังก์ชันกรองข้อมูล
  filter() {
    this.filtered = this.products.filter(p => !this.category || p.category === this.category);
  }

  // ฟังก์ชันลบข้อมูล
  delete(id: number) {
    this.api.deleteProduct(id).subscribe(() => {
      this.filtered = this.filtered.filter(p => p.id !== id);
    });
  }

  // ฟังก์ชันเปลี่ยนเส้นทางไปที่หน้า /form
  goToForm() {
    this.router.navigate(['/form']);
  }

  // ฟังก์ชันเปลี่ยนเส้นทางไปที่หน้า /cards
  goToCards() {
    this.router.navigate(['/cards']);
  }
}
