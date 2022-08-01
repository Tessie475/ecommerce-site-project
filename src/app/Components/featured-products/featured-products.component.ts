import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  featured: any = []
  constructor(private productsService: ProductsService, private cartService: CartService ) { }

  
  ngOnInit(): void {
    this.featured = this.productsService.featured
  }

addToCart(featuredProducts: any){
this.cartService.addItems(featuredProducts)
}
}
