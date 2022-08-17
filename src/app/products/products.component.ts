import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Array<Product>;

  constructor(private product:DataService,
              private router: Router) {}


  ngOnInit(): void {
    this.product.getProducts().subscribe((data: any[]) => {
       //const { products } : any = data ; //destruction syntax
      this.products = (data as any).products;   //converting object into array of products
      //console.log(this.products);
      //console.log(data);
    });
  }
}