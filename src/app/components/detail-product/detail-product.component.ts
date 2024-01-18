import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProdutService } from 'src/app/services/produt.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit{

  public productId = 0;
  constructor(private activatedRoute: ActivatedRoute, private productServ: ProdutService){}
  product:Product | undefined


  ngOnInit(): void {
      this.productId = this.activatedRoute.snapshot.params['id'];
      console.log("id du produit: "+this.productId)

      this.productServ.getProductById(this.productId).subscribe({
          next: (data)=>{
            this.product = data
          },
          error: (err)=>{
              console.log("error :"+ err)
          }
      })
  }

}
