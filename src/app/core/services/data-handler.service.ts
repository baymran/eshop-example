import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  constructor(private httpService: HttpClient) {}

  fetchProducts() {
    return this.httpService.get<Product[]>('https://jsonplaceholder.typicode.com/albums/1/photos')
  }
}
