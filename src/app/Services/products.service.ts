import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  products = [
    {
      id: 101, brandName: 'addidas', name: 'Cartoon Astronaut T-shirts', price:78,  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error, vel velit neque explicabo delectus rem? Tempora, minima. Molestias, necessitatibus! Sint assumenda temporibus natus voluptas eum ducimus et iusto voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ad nisi animi, non soluta aliquam maiores dolor? Iste quidem suscipit id earum est consequatur provident animi ipsum harum amet.', image: 'assets/img/products/f1.jpg', quantity: 0, subTotal:78
    },
    {
      id: 102, brandName: 'addidas', name: 'green T-shirts', price:28,  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error, vel velit neque explicabo delectus rem? Tempora, minima. Molestias, necessitatibus! Sint assumenda temporibus natus voluptas eum ducimus et iusto voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ad nisi animi, non soluta aliquam maiores dolor? Iste quidem suscipit id earum est consequatur provident animi ipsum harum amet.', image: 'assets/img/products/f2.jpg', quantity: 1, subTotal: 28
    },
    {
      id: 103, brandName: 'addidas', name: 'brown Astronaut T-shirts', price:20,  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error, vel velit neque explicabo delectus rem? Tempora, minima. Molestias, necessitatibus! Sint assumenda temporibus natus voluptas eum ducimus et iusto voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ad nisi animi, non soluta aliquam maiores dolor? Iste quidem suscipit id earum est consequatur provident animi ipsum harum amet.', image: 'assets/img/products/f3.jpg', quantity: 1, subTotal: 20
    },
    {
      id: 104, brandName: 'addidas', name: 'white flowered T-shirts', price:18,  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error, vel velit neque explicabo delectus rem? Tempora, minima. Molestias, necessitatibus! Sint assumenda temporibus natus voluptas eum ducimus et iusto voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ad nisi animi, non soluta aliquam maiores dolor? Iste quidem suscipit id earum est consequatur provident animi ipsum harum amet.', image: 'assets/img/products/f4.jpg', quantity: 1, subTotal: 18
    },
    {
      id: 105, brandName: 'addidas', name: 'pink flowered T-shirt', price:38,  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error, vel velit neque explicabo delectus rem? Tempora, minima. Molestias, necessitatibus! Sint assumenda temporibus natus voluptas eum ducimus et iusto voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ad nisi animi, non soluta aliquam maiores dolor? Iste quidem suscipit id earum est consequatur provident animi ipsum harum amet.', image: 'assets/img/products/f5.jpg', quantity: 1, subTotal: 38
    },
    {
      id: 106, brandName: 'addidas', name: 'Astronaut sweat shirt', price:50,  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error, vel velit neque explicabo delectus rem? Tempora, minima. Molestias, necessitatibus! Sint assumenda temporibus natus voluptas eum ducimus et iusto voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ad nisi animi, non soluta aliquam maiores dolor? Iste quidem suscipit id earum est consequatur provident animi ipsum harum amet.', image: 'assets/img/products/f6.jpg', quantity: 1, subTotal: 50
    },
    {
      id: 107, brandName: 'addidas', name: 'short palazzo', price:40,  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error, vel velit neque explicabo delectus rem? Tempora, minima. Molestias, necessitatibus! Sint assumenda temporibus natus voluptas eum ducimus et iusto voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ad nisi animi, non soluta aliquam maiores dolor? Iste quidem suscipit id earum est consequatur provident animi ipsum harum amet.', image: 'assets/img/products/f7.jpg', quantity:1, subTotal: 40
    },
    {
      id: 108, brandName: 'addidas', name: 'flowered blouse', price:30,  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error, vel velit neque explicabo delectus rem? Tempora, minima. Molestias, necessitatibus! Sint assumenda temporibus natus voluptas eum ducimus et iusto voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ad nisi animi, non soluta aliquam maiores dolor? Iste quidem suscipit id earum est consequatur provident animi ipsum harum amet.', image: 'assets/img/products/f8.jpg',quantity: 1, subTotal: 30
    }
  ]

  featured = [
    {
      id: 201, brandName: 'addidas', name: 'sky-blue shirt', price:58,  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error, vel velit neque explicabo delectus rem? Tempora, minima. Molestias, necessitatibus! Sint assumenda temporibus natus voluptas eum ducimus et iusto voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ad nisi animi, non soluta aliquam maiores dolor? Iste quidem suscipit id earum est consequatur provident animi ipsum harum amet.', image: 'assets/img/products/n1.jpg',quantity: 1, subTotal: 58
    },
    {
      id: 202, brandName: 'addidas', name: ' T-shirt', price:26,  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error, vel velit neque explicabo delectus rem? Tempora, minima. Molestias, necessitatibus! Sint assumenda temporibus natus voluptas eum ducimus et iusto voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ad nisi animi, non soluta aliquam maiores dolor? Iste quidem suscipit id earum est consequatur provident animi ipsum harum amet.', image: 'assets/img/products/n2.jpg',quantity: 1, subTotal: 26
    },
    {
      id: 203, brandName: 'addidas', name: 'white T-shirt', price:58,  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error, vel velit neque explicabo delectus rem? Tempora, minima. Molestias, necessitatibus! Sint assumenda temporibus natus voluptas eum ducimus et iusto voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ad nisi animi, non soluta aliquam maiores dolor? Iste quidem suscipit id earum est consequatur provident animi ipsum harum amet.', image: 'assets/img/products/n3.jpg', quantity: 1, subTotal: 58
    },
    {
      id: 204, brandName: 'addidas', name: ' T-shirt', price:28,  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error, vel velit neque explicabo delectus rem? Tempora, minima. Molestias, necessitatibus! Sint assumenda temporibus natus voluptas eum ducimus et iusto voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ad nisi animi, non soluta aliquam maiores dolor? Iste quidem suscipit id earum est consequatur provident animi ipsum harum amet.', image: 'assets/img/products/n4.jpg', quantity: 1, subTotal: 28
    },
    {
      id: 205, brandName: 'addidas', name: 'blue T-shirt', price:29,  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error, vel velit neque explicabo delectus rem? Tempora, minima. Molestias, necessitatibus! Sint assumenda temporibus natus voluptas eum ducimus et iusto voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ad nisi animi, non soluta aliquam maiores dolor? Iste quidem suscipit id earum est consequatur provident animi ipsum harum amet.', image: 'assets/img/products/n5.jpg', quantity: 1, subTotal: 29
    },
    {
      id: 206, brandName: 'addidas', name: 'ash short', price:38,  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error, vel velit neque explicabo delectus rem? Tempora, minima. Molestias, necessitatibus! Sint assumenda temporibus natus voluptas eum ducimus et iusto voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ad nisi animi, non soluta aliquam maiores dolor? Iste quidem suscipit id earum est consequatur provident animi ipsum harum amet.', image: 'assets/img/products/n6.jpg', quantity: 1, subTotal: 38
    },
    {
      id: 207, brandName: 'addidas', name: 'brown T-shirt', price:18,  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error, vel velit neque explicabo delectus rem? Tempora, minima. Molestias, necessitatibus! Sint assumenda temporibus natus voluptas eum ducimus et iusto voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ad nisi animi, non soluta aliquam maiores dolor? Iste quidem suscipit id earum est consequatur provident animi ipsum harum amet.', image: 'assets/img/products/n7.jpg', quantity: 1, subTotal: 18
    },
    {
      id: 208, brandName: 'addidas', name: 'black shirt', price:30,  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error, vel velit neque explicabo delectus rem? Tempora, minima. Molestias, necessitatibus! Sint assumenda temporibus natus voluptas eum ducimus et iusto voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ad nisi animi, non soluta aliquam maiores dolor? Iste quidem suscipit id earum est consequatur provident animi ipsum harum amet.', image: 'assets/img/products/n8.jpg', quantity:1, subTotal: 30
    }
  ]
}
