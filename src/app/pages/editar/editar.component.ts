import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";

@Component({
  selector: 'app-editar',
  standalone: true,
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  imports: [CommonModule, NavPainelComponent, FormsModule, ReactiveFormsModule]
})
export class EditarComponent implements OnInit {
  editForm!: FormGroup;
  userId!: string;
  updateError: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.editForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    }, { validators: this.checkPasswords });

    // Obter o ID do usuário da URL
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id')!;
      console.log('User ID:', this.userId);
      if (this.userId) {
        this.carregarDadosUsuario();
      } else {
        console.error('ID do usuário não fornecido na URL.');
      }
    });
  }

  carregarDadosUsuario() {
    this.http.get<any>(`http://localhost:3001/users/${this.userId}`)
      .subscribe({
        next: (userData) => {
          this.editForm.patchValue({
            nome: userData.nome,
            sobrenome: userData.sobrenome,
            email: userData.email
          });
        },
        error: (error) => {
          console.error('Erro ao buscar dados do usuário:', error);
        }
      });
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notSame: true };
  }

  onUpdate() {
    if (this.editForm.valid) {
      const { confirmPassword, ...formData } = this.editForm.value;

      this.http.patch(`http://localhost:3001/users/${this.userId}`, formData)
        .subscribe({
          next: () => {
            this.router.navigateByUrl('/painel');
          },
          error: (error) => {
            this.updateError = true;
            this.errorMessage = error.error.message || 'Erro ao atualizar usuário';
          }
        });
    }
  }
}
