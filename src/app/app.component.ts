import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SupportComponent } from "./pages/support/support.component";
import { AboutComponent } from "./pages/about/about.component";
import { AtuColecaoComponent } from './pages/atu-colecao/atu-colecao.component';
import { CadLivroComponent } from './pages/cad-livro/cad-livro.component';
import { ColecaoComponent } from './pages/colecao/colecao.component';
import { EditLivroComponent } from './pages/edit-livro/edit-livro.component';
import { EditarComponent } from './pages/editar/editar.component';
import { LivroComponent } from './pages/livro/livro.component';
import { PainelComponent } from './pages/painel/painel.component';
import { SobrePainelComponent } from './pages/sobre-painel/sobre-painel.component';
import { SupportePainelComponent } from './pages/supporte-painel/supporte-painel.component';
import { TodosLivrosComponent } from './pages/todos-livros/todos-livros.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, HomeComponent, SignupComponent, NavbarComponent, SupportComponent, AboutComponent,AtuColecaoComponent,CadLivroComponent,ColecaoComponent,EditLivroComponent,EditarComponent,LivroComponent,PainelComponent,SobrePainelComponent,SupportePainelComponent,TodosLivrosComponent]
})
export class AppComponent {
  title = 'AF-D.W';
}
