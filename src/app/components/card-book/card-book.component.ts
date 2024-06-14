import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-book',
  standalone: true,
  imports: [],
  templateUrl: './card-book.component.html',
  styleUrl: './card-book.component.css'
})
export class CardBookComponent implements OnInit{

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

  constructor(){}
  ngOnInit(): void {
      
  }
  onBookClick() {
    this.booksClick.emit(this._id); // Passa o ID quando clicado
  }
  
}
