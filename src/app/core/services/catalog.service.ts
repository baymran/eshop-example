import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {Product} from "../models/Product.model";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private apiService: ApiService) {}

  getProducts(): Observable<{ products: Product[], total: number, skip: number, limit: number }> {
    const params = {}
    return this.apiService.get('/products');
  }
}
