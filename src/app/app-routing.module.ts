import { RecruitComponent } from './components/recruit/recruit.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products-details', component: ProductsDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'recruit', component: RecruitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
