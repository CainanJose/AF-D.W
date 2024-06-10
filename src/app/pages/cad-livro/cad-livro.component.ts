import { Component } from '@angular/core';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-cad-livro',
    standalone: true,
    templateUrl: './cad-livro.component.html',
    styleUrl: './cad-livro.component.css',
    imports: [NavPainelComponent]
})
export class CadLivroComponent {
  constructor(private router: Router) {}

    navegarCadastrarLivro() {
      this.router.navigate(['cad-livro']); // Navega para a rota '/home'
    }
  
}
