import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-single',
  standalone: true,
  imports: [],
  templateUrl: './card-single.component.html',
  styleUrl: './card-single.component.css'
})
export class CardSingleComponent implements OnInit{

  @Input()
  title: string = "";
  @Input()
  author: string = "";
  @Input()
  description: string = "";
  @Input()
  _id: string = "";
  @Input()
  urlLink: string = "";
  @Output() 
  booksClick = new EventEmitter<string>();


  constructor(private router: Router){}
  ngOnInit(): void {
      
  }
  onBookClick() {
    this.booksClick.emit(this._id); // Passa o ID quando clicado
  }
  navTodosLivros() {
    this.router.navigate(['todos-livros']); 
  }

  navEditarLivro() {
    this.router.navigate(['edit-livro']); 
  }
}
