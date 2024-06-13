import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-collection',
  standalone: true,
  imports: [],
  templateUrl: './card-collection.component.html',
  styleUrl: './card-collection.component.css'
})
export class CardCollectionComponent implements OnInit{

  @Input()
  name: string = "";
  @Input()
  _id: string = "";
  @Input()
  urlLink: string = "";
  @Output() 
  collectionClick = new EventEmitter<string>();

  constructor(){}
  ngOnInit(): void {
      
  }
  onCollectionClick() {
    this.collectionClick.emit(this._id); // Passa o ID quando clicado
  }
}
