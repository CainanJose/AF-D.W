import { Component } from '@angular/core';
import { NavPainelComponent } from "../../components/nav-painel/nav-painel.component";
import { ColecaoComponent } from "../colecao/colecao.component";


@Component({
    selector: 'app-painel',
    standalone: true,
    templateUrl: './painel.component.html',
    styleUrl: './painel.component.css',
    imports: [NavPainelComponent, ColecaoComponent]
})
export class PainelComponent {

}
