import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-signup',
    standalone: true,
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css',
    imports: [CommonModule, ReactiveFormsModule, NavbarComponent, FormsModule]
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  signupError: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    }, { validators: this.checkPasswords }); // Adicionamos um validador personalizado
  }

  checkPasswords(group: FormGroup) { // Validador personalizado para senhas
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { notSame: true }; 
  }

  onSignup() {
    if (this.signupForm.valid) {
      // Remova o campo confirmPassword antes de enviar para o backend
      const { confirmPassword, ...formData } = this.signupForm.value; 

      this.http.post('http://localhost:3001/users', formData) 
        .subscribe({
          next: () => {
            this.router.navigateByUrl('login');
          },
          error: (error) => {
            this.signupError = true;
            if (error.status === 409) { // Conflito (e-mail já cadastrado)
              this.errorMessage = "Este e-mail já está cadastrado.";
            } else {
              this.errorMessage = error.error.message || 'Erro ao criar usuário';
            }
          }
        });
    }
  }
}