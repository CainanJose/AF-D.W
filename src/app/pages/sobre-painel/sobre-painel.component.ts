import { Component } from '@angular/core';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";

@Component({
    selector: 'app-sobre-painel',
    standalone: true,
    templateUrl: './sobre-painel.component.html',
    styleUrl: './sobre-painel.component.css',
    imports: [NavPainelComponent]
})
export class SobrePainelComponent {

}
