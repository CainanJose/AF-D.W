import { Component, Input, OnInit } from '@angular/core';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CollectionService } from 'src/app/service/collections.service'

@Component({
    selector: 'app-colecao',
    standalone: true,
    templateUrl: './colecao.component.html',
    styleUrl: './colecao.component.css',
    imports: [NavPainelComponent,FormsModule]
})
export class ColecaoComponent implements OnInit{

  constructor(private router: Router,private http: HttpClient,private service: CollectionService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  navPainel() {
    this.router.navigate(['painel']); 
  }
  newCollection = { name: '' };

  criarColecao() {
    console.log("aqui");
    
    this.service.criarColecao(this.newCollection)
  }

  


}