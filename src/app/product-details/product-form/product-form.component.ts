import { Component, Input, OnInit } from '@angular/core';
import { appConstant } from '../../app.constant';
import { CommonService } from '../../services/common.service';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
 // productForm: any;
  id: number | string = '';
  productForm: FormGroup;
  maxValue: number = 10;

  @Input() product: string | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
  private http: HttpClient,
  private fb: FormBuilder,
  private commonService: CommonService,
  private apiService: ApiService
  
   // private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.getProduct((data as any).id);
    });
  }
  getProduct(id: number) {
    this.apiService
      .httpGet(`${appConstant.apiRoute.products}/${id}`)
      .subscribe((data) => {
        this.product = data;
        this.initializeForm(data);
        console.log(data);
      });
    }

  get appConstant() {
    return appConstant;
  }

  initializeForm(product: any) {
    this.productForm = this.commonService.createproductForm(product);
  }
  onSubmit(formValue: any, isValid: boolean){
    if (isValid){
      console.log(formValue);
      console.log(isValid);
     this.apiService.httpPut(`${appConstant.apiRoute.products}/${this.id}`,formValue)
      .subscribe((data) => {
       console.log('data updated');
        console.log(data);
      
      (err)=>{
        console.log(err);
      }
    }
  );
}}
  }