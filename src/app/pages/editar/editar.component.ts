import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";
import { UserService } from 'src/app/service/user.service';
import * as bcrypt from 'bcryptjs';


@Component({
  selector: 'app-editar',
  standalone: true,
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  imports: [CommonModule, NavPainelComponent, FormsModule, ReactiveFormsModule]
})



export class EditarComponent implements OnInit {

  user: any;


  atuUser = {
    name: '',
    lastname:'',
    email:'',
    password:''
     };

  editForm!: FormGroup;
  userId!: string;
  updateError: boolean = false;
  errorMessage: string = '';

  constructor(private service: UserService, private router: Router) {}

  ngOnInit(): void {
    this.service.getUser().subscribe({
      next: (res) => {
        this.user = res;
        
        this.atuUser = {
          name: this.user.name,
          lastname: this.user.lastname,
          email: this.user.email,
          password: this.user.password
        };
        
      },
      error: (err) => console.error(err)
    });
  }

  async atualizarUser():Promise<void> { 
    if (confirm('Deseja realmente atualizar este livro?')){
      console.log(this.atuUser.password);
      this.atuUser.password = await bcrypt.hash(this.atuUser.password, 10);
      this.service.atualizaUser(this.atuUser)}
  }

  deleteUser(): void{
    if (confirm('Deseja realmente deletar este usuario?')){
      this.service.deleteUser()}
  }

  navPainel() {
    this.router.navigate(['painel']);
  }
}

  
