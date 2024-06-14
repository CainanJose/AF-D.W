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
// export class LivroComponent implements OnInit{

//   listBooks: any;

//   constructor(private router: Router,
//     private service: BookService
//   ) {}

//   ngOnInit(): void {
//     this.service.getAllBooks().subscribe({
//         next:((res)=>{
//             this.listBooks = res              
//             console.log(this.listBooks);
//         })
//     })
// }

//   navTodosLivros() {
//     this.router.navigate(['todos-livros']); 
//   }

//   navEditarLivro() {
//     this.router.navigate(['edit-livro']); 
//   }
// }

export class LivroComponent implements OnInit {
  
  books: any;

  constructor(private service: BookService,private router: Router) {}

  ngOnInit(): void {
    this.service.getBook().subscribe({
        next:((res)=>{
            this.books = res              
            console.log(this.books);
        })
    })

}
  navTodosLivros() {
    this.router.navigate(['todos-livros']); 
  }

  navEditarLivro() {
    this.router.navigate(['edit-livro']); 
  }
}
