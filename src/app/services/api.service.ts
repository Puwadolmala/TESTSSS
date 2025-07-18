
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  createProduct(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
