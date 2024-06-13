import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HttpClient } from '@angular/common/http';



@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [CommonModule, ReactiveFormsModule, NavbarComponent, FormsModule]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  invalidUser: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:3001/login', this.loginForm.value, { responseType: 'text' })
        .subscribe({
          next: (token: string) => {
            // Armazena o token no localStorage
            localStorage.setItem('token', token); 
            //console.log(token);
            
            this.router.navigateByUrl('painel');
          },
          error: (error) => {
            this.invalidUser = true;
            setTimeout(() => {
              this.invalidUser = false;
            }, 3000);
          }
        });
        
    }
  }

  navegarSignup() {
    this.router.navigate(['signup']);
  }
}













// loginForm: FormGroup;
//   invalidUser: boolean = false;
//   constructor(private router: Router) {
//     this.loginForm = new FormGroup({
//       email: new FormControl('', [Validators.required]),
//       password: new FormControl('', [Validators.required])
//     })

//   }

//   userCreate(userForm: {email: string, password:string}){

//   }


//     navegarSignup() {
//         this.router.navigate(['signup']); 
//   }

//   login() {
//     const email = this.loginForm.value['email']?.toLowerCase();
//     const password = this.loginForm.value['password']?.toLowerCase();
  
//     if (email === "admin@gmail.com" && password === "admin") {
//       this.router.navigate(["painel"]);
//     } else {
//       this.invalidUser = true; 
//       setTimeout(() => {
//         this.invalidUser = false;
//       }, 3000);
//     }
//   }
  
//   navegarHome() {
//     this.router.navigate(['']); // Navega para a rota '/home'
//   }