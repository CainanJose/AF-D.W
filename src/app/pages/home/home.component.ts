import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { AboutComponent } from "../about/about.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent, AboutComponent]
})
export class HomeComponent implements OnInit{
    constructor(){}
    ngOnInit(): void {
        
    }
}