import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login.component'; // นำเข้า LoginComponent
import { ProductCardListComponent } from './components/product-card-list.component';
import { ProductCardComponent } from './components/product-card.component';
import { ProductFormComponent } from './components/product-form.component';
import { ProductListComponent } from './components/product-list.component';
import { ProductModalComponent } from './components/product-modal.component';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Services
import { ApiService } from './services/api.service'; // นำเข้า ApiService

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductListComponent,
    ProductCardListComponent,
    ProductModalComponent,
    ProductCardComponent,
    LoginComponent  // เพิ่ม LoginComponent ใน declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [ApiService],  // เพิ่ม ApiService ใน providers
  bootstrap: [AppComponent]
})
export class AppModule { }
