import { Component, OnInit } from '@angular/core';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { CardSingleComponent } from 'src/app/components/card-single/card-single.component';


@Component({
    selector: 'app-livro',
    standalone: true,
    templateUrl: './livro.component.html',
    styleUrl: './livro.component.css',
    imports: [NavPainelComponent,CardSingleComponent]
})

export class LivroComponent implements OnInit {
  
  books: any;

  constructor(private service: BookService,private router: Router) {}

  ngOnInit(): void {
    this.service.getBook().subscribe({
        next:((res)=>{
            this.books = res 
            if (this.books.image && !this.books.image.startsWith('data:image')) {
              this.books.image = `data:image/png;base64,${this.books.image}`;
            }             
            console.log(this.books.image);
        })
    });

}
  navTodosLivros() {
    this.router.navigate(['todos-livros']); 
  }

  navEditarLivro() {
    this.router.navigate(['edit-livro']); 
  }
}
