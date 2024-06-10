import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-livro',
  standalone: true,
  imports: [],
  templateUrl: './edit-livro.component.html',
  styleUrl: './edit-livro.component.css'
})
export class EditLivroComponent {
  constructor(private router: Router) {}

  navLivros() {
    this.router.navigate(['livro']);
  }


}
