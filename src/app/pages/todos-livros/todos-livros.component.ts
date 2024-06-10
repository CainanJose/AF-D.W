import { Component } from '@angular/core';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-todos-livros',
    standalone: true,
    templateUrl: './todos-livros.component.html',
    styleUrl: './todos-livros.component.css',
    imports: [NavPainelComponent]
})
export class TodosLivrosComponent {
    constructor(private router: Router) {}

    navLivros() {
      this.router.navigate(['livro']);
    }

    navColecao() {
      this.router.navigate(['colecao']); 
    }
  
}
