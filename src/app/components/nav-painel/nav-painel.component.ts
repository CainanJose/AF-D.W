import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-painel',
  standalone: true,
  imports: [],
  templateUrl: './nav-painel.component.html',
  styleUrl: './nav-painel.component.css'
})
export class NavPainelComponent {
  constructor(private router: Router) {}

  navSuportePainel() {
    this.router.navigate(['supporte-painel']); // Navega para a rota '/login'
  }

  navPainel() {
    this.router.navigate(['painel']); // Navega para a rota '/login'
  }

  navSobre() {
    this.router.navigate(['sobre-painel']); // Navega para a rota '/login'
  }

  navegarHome() {
    this.router.navigate(['']); // Navega para a rota '/home'
  }

  navegarEditar() {
    this.router.navigate(['editar']); // Navega para a rota '/home'
  }
}

