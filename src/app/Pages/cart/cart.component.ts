import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

featured!:any
products: any = []
total !: number
quantity:number =0
price:number = 0
finalTotal !: number

  constructor( private cartService: CartService){}

  ngOnInit(): void {
    this.products = this.cartService.cartItemList
    this.total = this.cartService.getTotalPrice()
    this.notifyMe()
  }

  notifyMe(){
    this.cartService.cartItemList.reduce((total:any, object:any) =>{
      this.total = total + (object.price * object.quantity)
      return this.total
    }, 0)
  }

  removeItem(featuredProducts: any){
    this.cartService.removeCartItem(featuredProducts)
  }

  emptyCart(){
    this.cartService.removeAllItems()
    this.products = this.cartService.cartItemList
  }

}


