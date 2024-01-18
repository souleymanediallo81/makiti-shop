import { Product } from "./product.model"

export interface CommendeUser{
    id?:number,
    nom:string,
    tel:string,
    codeCarte:string,
    typePayment:string,
    dateCommender:number,
    adresse:string,
    listeCommendeEffectuer:Array<Product>
    favoris?:Array<any>
}