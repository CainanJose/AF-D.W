import { Component } from '@angular/core';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-editar',
    standalone: true,
    templateUrl: './editar.component.html',
    styleUrl: './editar.component.css',
    imports: [NavPainelComponent]
})
export class EditarComponent {
  constructor(private router: Router) {}

  navPainel() {
    this.router.navigate(['painel']); 
  }
}
