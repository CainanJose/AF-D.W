import { Component } from '@angular/core';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";

@Component({
    selector: 'app-supporte-painel',
    standalone: true,
    templateUrl: './supporte-painel.component.html',
    styleUrl: './supporte-painel.component.css',
    imports: [NavPainelComponent]
})
export class SupportePainelComponent {
    teste ='@'
}
