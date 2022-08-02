import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemList: any = []
  featured: any = []
  total !: number


  constructor() { }

  addItems (product:any){
    if (!this.cartItemList.includes(product)) {
    this.cartItemList.push(product)
    }
    this.featured.push(this.cartItemList)
    this.getTotalPrice()
    this.notifyMe()
  }
  notifyMe(){
    this.cartItemList.reduce((total:any, object:any) =>{
      this.total = total + (object.price * object.quantity)
      return this.total
    }, 0)
  }

  getTotalPrice(){
    let total = 0
    this.cartItemList.forEach((n:any)=>{
      total += n.price
    })
    return total
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }

  removeAllItems(){
    this.cartItemList = []
    console.log(this.cartItemList)
  }
  
}
