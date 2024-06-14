import { Component, Input, OnInit } from '@angular/core';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CollectionService } from '../../service/collections.service'

@Component({
  selector: 'app-atu-colecao',
  standalone: true,
  imports: [NavPainelComponent,FormsModule],
  templateUrl: './atu-colecao.component.html',
  styleUrl: './atu-colecao.component.css'
})
export class AtuColecaoComponent implements OnInit {
  collections: any;

  newCollection = {
    name: '' 
   };

  constructor(private router: Router,private service: CollectionService) {}

  ngOnInit(): void {
  }
 

  navPainel() {
    this.router.navigate(['painel']); 
  }

  navTodosLivros() {
    this.router.navigate(['todos-livros']); 
  }

  deleteColecao(): void {
      this.service.deleteColecao(); 
    
  }

  atualizarColecao(){
    if (confirm('Deseja realmente atualizar essa coleção?')){
      this.service.atualizar(this.newCollection)
    }
    
  }
}
