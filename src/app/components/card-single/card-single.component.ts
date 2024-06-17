import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-single',
  standalone: true,
  imports: [CommonModule],
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
  @Input()
  image: string = "";
  @Input()
  isbn: string = "";
  @Output() 
  booksClick = new EventEmitter<string>();
  safeImageUrl: SafeUrl | null = null;


  constructor(private router: Router,private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64`+this.image);
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
