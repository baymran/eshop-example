import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../core/services/data-handler.service";
import {delay, Observable, tap} from "rxjs";
import {Product} from "../core/models/Product";
@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent {
  products: Observable<Product[]> = this.dataHandler.fetchProducts().pipe(
    tap(() => {this.isLoading = true}),
    delay(1000),
    tap(() => this.isLoading = false)
  )
  isLoading: boolean = false
  constructor(private dataHandler: DataHandlerService) {
  }

}
