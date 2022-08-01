import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {
products: any = []
  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productsService.products
  }
addToCart(arrivals: any){
  this.cartService.addItems(arrivals)
}

}
