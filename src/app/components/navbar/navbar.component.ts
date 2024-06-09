import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['login']); // Navega para a rota '/login'
  }

  navegarSignup() {
    this.router.navigate(['signup']); // Navega para a rota '/signup'
  }

    navegarAbout() {
    this.router.navigate(['about']); // Navega para a rota '/sobre'
  }

    navegarSupport() {
    this.router.navigate(['support']); // Navega para a rota '/suporte'
  }

    navegarHome() {
    this.router.navigate(['']); // Navega para a rota '/home'
  }
}