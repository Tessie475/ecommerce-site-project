import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-site-project';

  showNav:boolean = false;
  crossIcon:boolean =false;

  displayNav(){
    this.showNav=!this.showNav;
    this.crossIcon =! this.crossIcon
  }
  
}
