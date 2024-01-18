import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CommendeUser } from 'src/app/models/user.model';

import { AppStateService } from 'src/app/services/app-state.service';
import { CommendeUserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mon-panier',
  templateUrl: './mon-panier.component.html',
  styleUrls: ['./mon-panier.component.css']
})
export class MonPanierComponent implements OnInit {

  myPanier!: Product[];
  userFormGroup:FormGroup | undefined;

  constructor(public appState: AppStateService, private fb:FormBuilder, private cmdUserServ:CommendeUserService, private router:Router){}
  ngOnInit(): void {

    this.userFormGroup = this.fb.group({
        nom: this.fb.control('', [Validators.required]),
        tel: this.fb.control('', [Validators.required]),
        codeCarte: this.fb.control('', []),
        adresse:this.fb.control(''),
        typePayment:this.fb.control('CACHE',[Validators.required])

    })

    
    this.myPanier = this.appState.productState.listPanier;
    console.log(this.myPanier)
  }

  save(){
    if(!this.userFormGroup?.valid)
      return;
    if(this.userFormGroup.value.typePayment=='VISA' && this.userFormGroup.value.codeCarte==''){
        alert("Veuillez saisir le Code de la Carte Visa !")
    }
    console.log("Enregistrement panier ===============")
    console.log(this.userFormGroup?.value);

    let commendeUser: CommendeUser = {
      nom:this.userFormGroup.value.nom,
      tel:this.userFormGroup.value.tel,
      codeCarte:this.userFormGroup.value.codeCarte,
      typePayment:this.userFormGroup.value.typePayment,
      dateCommender:  Date.now(),
      adresse:this.userFormGroup.value.adresse,
      listeCommendeEffectuer:this.appState.productState.listPanier
    }
    this.cmdUserServ.addUserCommende(commendeUser).subscribe({
      next:(data)=>{
          alert("Commende Effectuez avec succees! Vous recevrez un appelle pour la Confirmation.")

          this.userFormGroup?.reset();
          this.appState.setProductState({
            listPanier:[]

          }),
          localStorage.setItem("telephone",data.tel)
          this.userFormGroup?.reset();
          this.appState.setProductState({
            listPanier:[]

          }),
          this.router.navigateByUrl("/mesCommendes")
      },

      error: (err)=>{
        console.log("Erreur ======:", err);
      }
    })
    
  }

  //creer une methode qui permet de changer la quantite du produit au moment du keyUp

  changeQuantity(number:any,product:any){
    let id=number.value
      console.log("quantite modifier:"+number.value)
     
      this.myPanier = this.myPanier!.map(p=> {
        if(p.id==product.id){
          p.quantite = id;
          return p;
        }else{
          return p;
        }
      })

      this.appState.setProductState({
        listPanier:this.myPanier
      })
     

  }

  deleteProductToCart(id: number){
      this.myPanier = this.myPanier.filter(p=> p.id!=id);
      this.appState.setProductState({
        listPanier: this.myPanier
      })
  }

  sommeProduct(){
    let somme=0;
    if(this.myPanier?.length !=0){
        this.myPanier.map(p=> {
          somme += p.price * p.quantite;
        });

        return somme;
    }else {
      return 0;
    }
  }

}
