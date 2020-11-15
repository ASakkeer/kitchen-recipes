import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginRegisterComponent },
  { path: 'signup', component: LoginRegisterComponent },
  { path: 'forgot-password', component: LoginRegisterComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'product-details/:id', component: ProductViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
