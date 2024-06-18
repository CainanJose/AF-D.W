import { Component, OnInit } from '@angular/core';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";
import { ColecaoComponent } from "../colecao/colecao.component";
import { CollectionService } from '../../service/collections.service'
import { CardCollectionComponent } from 'src/app/components/card-collection/card-collection.component';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
    selector: 'app-painel',
    standalone: true,
    templateUrl: './painel.component.html',
    styleUrl: './painel.component.css',
    imports: [NavPainelComponent, ColecaoComponent, CardCollectionComponent]
})
export class PainelComponent implements OnInit{

    listCollection:any;

    user = {
        name: '',
         };
    

    constructor(private service: CollectionService,
        private router: Router,
        private usuario: UserService
    ){}

    ngOnInit(): void {
        this.service.getCollections().subscribe({
            next:((res)=>{
                this.listCollection = res              
                console.log(this.listCollection);
            })
        })

        this.usuario.getUser().subscribe({
            next: (res) => {
              this.user = res;
              
              this.user = {
                name: this.user.name,
              };
              
            },
            error: (err) => console.error(err)
          });
    }

    minhaFuncao(id:string, name:string){
        //localStorage.removeItem('id')
        localStorage.setItem('idCollection',id)
        localStorage.setItem('nomeColecao',name)
    }

    navAddcolecao() {
        this.router.navigate(['colecao']);
      }

      
    navAtuColecao() {
        this.router.navigate(['atu-colecao']);
      }
    

}
