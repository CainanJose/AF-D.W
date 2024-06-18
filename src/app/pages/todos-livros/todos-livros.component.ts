import { Component, Input, OnInit } from '@angular/core';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { CardBookComponent } from 'src/app/components/card-book/card-book.component';
import { CollectionService } from '../../service/collections.service'

@Component({
    selector: 'app-todos-livros',
    standalone: true,
    templateUrl: './todos-livros.component.html',
    styleUrl: './todos-livros.component.css',
    imports: [NavPainelComponent, CardBookComponent]
})
export class TodosLivrosComponent implements OnInit {
  
    listBooks: any;
    collectionName: string | null = null;
    
    

    constructor(private service: BookService,private router: Router, private collection: CollectionService) {}

    
    ngOnInit(): void {
      this.collectionName = localStorage.getItem('nomeColecao');
      this.service.getAllBooks().subscribe({
          next:((res)=>{
              this.listBooks = res              
          })
      })
      
    }


      minhaFuncao(id:string): void{
        //localStorage.removeItem('idlivro')
        localStorage.setItem('idLivro',id)
    }

    navPainel(){
        this.router.navigate(['painel']); 
    }

    navCadLivro(){
        this.router.navigate(['cad-livro']); 
    }
    
    navAtuColecao() {
        this.router.navigate(['atu-colecao']);
      }
    
}
