import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // นำเข้า Router
import { ApiService } from '../services/api.service'; // นำเข้า ApiService

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']  // เปลี่ยนให้เป็น .scss
})
export class ProductFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {  // เพิ่ม Router
    this.form = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      isAvailable: [false]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.api.createProduct(this.form.value).subscribe(response => {
        console.log('Product created successfully', response);
        this.form.reset();
      }, error => {
        console.error('Error creating product', error);
      });
    }
  }

  // ฟังก์ชันย้อนกลับไปหน้า /
  goBack() {
    this.router.navigate(['/']);
  }
}
