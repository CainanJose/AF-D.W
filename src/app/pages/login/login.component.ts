import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  invalidUser: boolean = false;
  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

  }

    navegarSignup() {
        this.router.navigate(['signup']); 
  }

  login() {
    const email = this.loginForm.value['email']?.toLowerCase();
    const password = this.loginForm.value['password']?.toLowerCase();
  
    if (email === "admin@gmail.com" && password === "admin") {
      this.router.navigate(["painel"]);
    } else {
      this.invalidUser = true; 
      setTimeout(() => {
        this.invalidUser = false;
      }, 3000);
    }
  }
  
  navegarHome() {
    this.router.navigate(['']); // Navega para a rota '/home'
  }
}
