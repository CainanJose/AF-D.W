import { Component } from '@angular/core';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-livro',
    standalone: true,
    templateUrl: './livro.component.html',
    styleUrl: './livro.component.css',
    imports: [NavPainelComponent]
})
export class LivroComponent {
  constructor(private router: Router) {}

  navTodosLivros() {
    this.router.navigate(['todos-livros']); 
  }

  navEditarLivro() {
    this.router.navigate(['edit-livro']); 
  }
}
