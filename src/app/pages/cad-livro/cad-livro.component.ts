import { Component, Input } from '@angular/core';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookService } from 'src/app/service/book.service';

@Component({
    selector: 'app-cad-livro',
    standalone: true,
    templateUrl: './cad-livro.component.html',
    styleUrl: './cad-livro.component.css',
    imports: [NavPainelComponent,FormsModule]
})
export class CadLivroComponent {
  @Input() title!: string;
  @Input() author!: string;
  @Input() description!: string;


  constructor(private router: Router,private http: HttpClient,private service: BookService) {}

    newLivro = {
      title: '',
      author:'',
      description:''
       };
      
      criarLivro() { 
        this.service.criarLivro(this.newLivro)
      }



    navegarCadastrarLivro() {
      this.router.navigate(['cad-livro']); 
    }
    navTodosLivros() {
      this.router.navigate(['todos-livros']); 
    }

  }
