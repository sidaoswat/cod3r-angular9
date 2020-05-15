import { Component, OnInit } from '@angular/core';
import { Product } from '../product-create/product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  public product: Product = {
    name: '',
    price: null
  };

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id)
      .subscribe((product: Product) => {
        this.product = product;
    });
  }

  public deleteProduct(): void {
    this.productService.delete(this.product.id.toString())
      .subscribe((product: Product) => {
        this.productService.showMessage('Produto excluído com sucesso!');
        this.router.navigate(['/products']);
      });  
  }

  public cancel(): void {
    this.router.navigate(['/products']);
  }
}
