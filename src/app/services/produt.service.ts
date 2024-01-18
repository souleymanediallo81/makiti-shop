import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutService {

  private url = "http://localhost:3000/products"
  constructor(private http: HttpClient) { }

  getProducts():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`${this.url}`);
  }

  searchPoroduct(keyword:string): Observable<Array<Product>>{
      return this.http.get<Array<Product>>(`${this.url}?categorie_like=${keyword}`);
  }

  searchPoroductByName(keyword:string): Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`${this.url}?name_like=${keyword}`);
}

  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`)
  }
}
