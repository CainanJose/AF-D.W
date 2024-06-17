import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-livro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-livro.component.html',
  styleUrl: './edit-livro.component.css'
})
export class EditLivroComponent implements OnInit {
  books: any;


  atuLivro = {
    title: '',
    author:'',
    description:'',
    image: '',
    isbn:''
     };
     
     constructor(private service: BookService, private router: Router, private http: HttpClient) {}

     ngOnInit(): void {
       this.service.getBook().subscribe({
         next: (res) => {
           this.books = res;
           this.atuLivro = {
             title: this.books.title,
             author: this.books.author,
             description: this.books.description,
             image: this.books.image,
             isbn: this.books.isbn
           };
         },
         error: (err) => console.error(err)
       });
     }

     onFileSelected(event: any) {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        this.atuLivro.image = reader.result as string; // Atribui a string Base64
      };
  
      reader.readAsDataURL(file);
    }
    
      dele(): void{
        if (confirm('Deseja realmente deletar este livro?')){
          this.service.deleteBook()}
      }

  
     atualizar() { 
      if (confirm('Deseja realmente atualizar este livro?')){
      this.service.atualizar(this.atuLivro)}
    }

    navTodosLivros() {
      this.router.navigate(['todos-livros']); 
    }

    navEditarLivro() {
      this.router.navigate(['edit-livro']); 
    }
    navLivros() {
      this.router.navigate(['livro']);
    }
}

