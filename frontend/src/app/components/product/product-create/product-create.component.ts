import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/components/product/product.service';
import { Router } from '@angular/router';
import { Product } from './product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  public product: Product = {
    name: '',
    price: null
  };

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  public createProduct(): void {
    this.productService.create(this.product)
      .subscribe(()=> {
        this.router.navigate(['/products']);
        this.productService.showMessage('Produto Criado!');
      });
  }

  public cancel(): void {
    this.router.navigate(['/products']);
  }

}
