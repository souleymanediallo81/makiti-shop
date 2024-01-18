import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { AppStateService } from 'src/app/services/app-state.service';
import { ProdutService } from 'src/app/services/produt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  products: Array<Product> | undefined
  public currentCat:string="";
  produitPanier: Array<Product> | undefined
  //public keyword: string = "";
  public categories: Array<any> = [
    {
    name:"accessories",
    image:"assets/images/cats/accessories.png",
   },
 
   {
    name:"dress",
    image:"assets/images/cats/dress.png",
   },
   {
    name:"formal",
    image:"assets/images/cats/formal.png",
   },
   {
    name:"informal",
    image:"assets/images/cats/informal.png",
   },
   {
    name:"jeans",
    image:"assets/images/cats/jeans.png",
   },
   {
    name:"shoe",
    image:"assets/images/cats/shoe.png",
   },
   {
    name:"tshirt",
    image:"assets/images/cats/tshirt.png",
   }
   ]

   
  constructor(private productServ: ProdutService, private appState: AppStateService){}
  ngOnInit(): void {
    this.allProduct();
  }

  selectedToggle(pro:Product){
    let rep = false;
     if(this.appState.productState.listPanier.length !=0){
      let prod=this.appState.productState.listPanier.find((p:Product)=> p.id==pro.id)
      if(prod){
        rep = true;
      }else{
        rep = false;
      }
    }

    return rep;
    
    

    

  }

  addToCart(product:Product){
   
    console.log(product)

    // let newList;
    //   let myProduct = this.appState.productState.listPanier.find((p:Product)=> p.id==product.id);
    //   if(myProduct){
    //       newList = this.appState.productState.listPanier.filter((p:Product)=>p.id != myProduct.id)
    //       this.appState.setProductState({
    //         listPanier:newList
    //     })
    //   }

    //  if(this.appState.productState.listPanier.length!=0){
    //   // let newList;
    //    let myPanier= this.appState.productState.listPanier.find((p:Product)=> p.id==product.id )
    //    console.log("Produit rechercher:", myPanier)
            
        
         
       
    //   //console.log("Produit rechercher",myProduct)

    //  }else{
    //   this.appState.setProductState({
    //        listPanier:[...this.appState.productState.listPanier, product]
           
    //      })
        
    //  }
    //  this.selectedToggle(product)     
      // if(myProduct==undefined){
      //   
      // this.selectedToggle(product)
      // }
    
    // console.log(listP)
    // console.log(product)
    
    

    console.log("Apres ajout: "+ this.appState.productState.listPanier)
    this.appState.setProductState({
             listPanier:[...this.appState.productState.listPanier, product]
             
           })
    this.selectedToggle(product);
  }

  searchProductByName(keyword:any){
      console.log("Vous avez rechercher :", keyword.value);
      this.productServ.searchPoroductByName(keyword.value).subscribe({
          next: (data)=>{
            this.products = data;
          }
      })
  }

  allProduct(){
    this.currentCat = ""
    this.productServ.getProducts().subscribe({
      next:(data)=>{
          this.products = data;
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

  search(category:any){
    this.currentCat=category.name;
    //let myCat = category.r

    this.productServ.searchPoroduct(category.name).subscribe({
      next:(data)=>{
          this.products = data;
      },
      error: (err)=>{
        console.log(err);
      }
    })
   }
      
  

}
