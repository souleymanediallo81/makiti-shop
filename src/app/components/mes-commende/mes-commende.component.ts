import { Component, OnInit } from '@angular/core';
import { CommendeUser } from 'src/app/models/user.model';
import { CommendeUserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mes-commende',
  templateUrl: './mes-commende.component.html',
  styleUrls: ['./mes-commende.component.css']
})
export class MesCommendeComponent implements OnInit{
  constructor(private cmdUserServ:CommendeUserService){}
  telephone:any;
  keyword:string = "";
  listCommendeUser:any | undefined
  ngOnInit(): void {
      this.telephone = localStorage.getItem('telephone')
      if(this.telephone!=null){
        this.keyword = this.telephone;
        this.searchCommendeByPhoneNumber();
      }
  }

  sommeListCommende(cmd:any){
    let somme=0;
    if(cmd.listeCommendeEffectuer?.length !=0){
        cmd.listeCommendeEffectuer.map((p:any)=> {
          somme += p.price * p.quantite;
        });

        return somme;
    }else {
      return 0;
    }
  }
  

  searchCommendeByPhoneNumber(){
      console.log("Recheche en cours du Numero", this.keyword);
      this.cmdUserServ.searchCommendeUserByTel(this.keyword).subscribe({
        next:(data)=>{
          this.listCommendeUser = data;
        },
        error:(err)=>{
          console.log("Error commende Liste User:", err)
        }
      })
    
  }
}
