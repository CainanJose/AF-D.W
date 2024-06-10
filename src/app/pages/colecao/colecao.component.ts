import { Component } from '@angular/core';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-colecao',
    standalone: true,
    templateUrl: './colecao.component.html',
    styleUrl: './colecao.component.css',
    imports: [NavPainelComponent]
})
export class ColecaoComponent {
  constructor(private router: Router) {}

  navTodosLivros() {
    this.router.navigate(['todos-livros']); 
  }
}
