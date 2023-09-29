import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductComponent },
      { path: 'cart', component: CartComponent },
      { path: 'concepts', component: ConceptsComponent },
      { path: '**', redirectTo: 'concepts' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
