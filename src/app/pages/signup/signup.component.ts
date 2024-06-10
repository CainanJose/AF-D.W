import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['login']); // Navega para a rota '/login'
  }

}
