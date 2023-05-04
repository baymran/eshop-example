import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {CatalogService} from "../core/services/catalog.service";
import {Product} from "../core/models/Product.model";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent implements OnInit {
  @Input() limit: number

  results: Product[];
  isLoading: boolean = false;
  currentPage: number = 1;

  constructor(private catalogService: CatalogService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.isLoading = true;
    this.results = [];
    this.catalogService.getProducts().subscribe(data => {
      this.isLoading = false;
      this.results = data.products
      this.cd.markForCheck()
    })
  }

}
