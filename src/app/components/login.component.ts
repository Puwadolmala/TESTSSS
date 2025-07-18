import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    
    // กรณีตรวจสอบการเข้าสู่ระบบ (แค่ตัวอย่าง, ใช้ backend จริง)
    if (username === 'admin' && password === '1234') {
      // ถ้าข้อมูลถูกต้อง, เปลี่ยนเส้นทางไปยังหน้า /
      this.router.navigate(['/']);
    } else {
      // หากเข้าสู่ระบบไม่สำเร็จ
      this.errorMessage = 'รหัสผ่านไม่ถูกต้อง';
    }
  }
}
