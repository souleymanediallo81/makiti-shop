import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { MonPanierComponent } from './components/mon-panier/mon-panier.component';
import { MesCommendeComponent } from './components/mes-commende/mes-commende.component';


const routes: Routes = [
{
  path:"" , component:HomeComponent
},
{
  path:"monPanier", component:MonPanierComponent
},
{
  path:"mesCommendes", component:MesCommendeComponent
},
{
  path:"detailProduct/:id" , component:DetailProductComponent
},
   
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
