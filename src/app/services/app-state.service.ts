import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  // public ListPanier:Product[

  // ] 

  public productState:any = {
      listPanier:[],
      user:[],
      //isActive:"",
      //nombreProduitPanier:0,
  }
  constructor() { }

  setProductState(state:any):void{
    this.productState = {...this.productState, ...state};
  }
}
