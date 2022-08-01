import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './Components/hero-section/hero-section.component'
import { FeaturedProductsComponent } from './Components/featured-products/featured-products.component';
import { NewArrivalsComponent } from './Components/new-arrivals/new-arrivals.component';
import { NewsletterComponent } from './Components/newsletter/newsletter.component';
import { AboutComponent } from './Pages/about/about.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { CartComponent } from './Pages/cart/cart.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { ShopComponent } from './Pages/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    FeaturedProductsComponent,
    NewArrivalsComponent,
    NewsletterComponent,
    AboutComponent,
    BlogComponent,
    CartComponent,
    ContactComponent,
    HomeComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
