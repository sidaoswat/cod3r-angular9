import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product-create/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
 
  public product: Product = {
    name: '',
    price: null
  };

  constructor(private productsService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productsService.readById(id)
      .subscribe((product: Product) => {
        this.product = product;
    });
  }

  public updateProduct(): void {
    this.productsService.update(this.product)
      .subscribe((product: Product) => {
        this.productsService.showMessage('Produto atualizado com sucesso');
        this.router.navigate(['/products']);
      });
  }

  public cancel(): void {
    this.router.navigate(['/products'])
  }

}
