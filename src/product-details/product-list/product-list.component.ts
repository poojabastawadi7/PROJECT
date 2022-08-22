import { Component, Input, OnInit } from '@angular/core';
import { appConstant } from '../../app.constant';
import { Product } from '../../products/product';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productForm: any;
 @Input() product: Product | undefined;

  constructor(
    private apiService: ApiService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {}

  initializeForm(product: any) {
   this.productForm = this.commonService.createproductForm(product);
  }
  get appConstant() {
    return appConstant;
  }

  getDetails(id: number) {
    // this.apiService
    //   .httpGet(`${appConstant.apiRoute.products}/${id}`)
    //   .subscribe((data) => {
    //     this.product = data;
    //     this.initializeForm(data);
    //     console.log(data);
    //   });
  }
}
