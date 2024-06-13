import { Component, OnInit } from '@angular/core';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";
import { ColecaoComponent } from "../colecao/colecao.component";
import { CollectionService } from '../../service/collections.service'
import { CardCollectionComponent } from 'src/app/components/card-collection/card-collection.component';


@Component({
    selector: 'app-painel',
    standalone: true,
    templateUrl: './painel.component.html',
    styleUrl: './painel.component.css',
    imports: [NavPainelComponent, ColecaoComponent, CardCollectionComponent]
})
export class PainelComponent implements OnInit{

    listCollection:any;
    router: any;

    constructor(private service: CollectionService){}

    ngOnInit(): void {
        this.service.getCollections().subscribe({
            next:((res)=>{
                this.listCollection = res              
                console.log(this.listCollection);
            })
        })
    }

    minhaFuncao(id:string){
        //localStorage.removeItem('id')
        localStorage.setItem('idCollection',id)
    }


}
