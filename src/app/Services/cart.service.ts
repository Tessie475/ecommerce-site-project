import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemList: any = []
  featured: any = []

  constructor() { }

  addItems (product:any){
    this.cartItemList.push(product)
    this.featured.push(this.cartItemList)
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }
  
}
