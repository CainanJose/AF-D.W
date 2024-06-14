import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { SupportComponent } from './pages/support/support.component';
import { AboutComponent } from './pages/about/about.component';
import { PainelComponent } from './pages/painel/painel.component';
import { LivroComponent } from './pages/livro/livro.component';
import { EditarComponent } from './pages/editar/editar.component';
import { EditLivroComponent } from './pages/edit-livro/edit-livro.component';
import { ColecaoComponent } from './pages/colecao/colecao.component';
import { CadLivroComponent } from './pages/cad-livro/cad-livro.component';
import { SobrePainelComponent } from './pages/sobre-painel/sobre-painel.component';
import { SupportePainelComponent } from './pages/supporte-painel/supporte-painel.component';
import { TodosLivrosComponent } from './pages/todos-livros/todos-livros.component';
import { AtuColecaoComponent } from './pages/atu-colecao/atu-colecao.component';

export const routes: Routes = [
  
  { 
    path: 'users/:id', component: EditarComponent

  },
  {

    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },

  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  
  {
    path: 'support',
    component: SupportComponent,
    pathMatch: 'full',
  },

  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
  },

  {
    path: 'painel',
    component: PainelComponent,
    pathMatch: 'full',
  },

  {
    path: 'livro',
    component: LivroComponent,
    pathMatch: 'full',
  },

  {
    path: 'editar',
    component: EditarComponent,
    pathMatch: 'full',
  },

  {
    path: 'edit-livro',
    component: EditLivroComponent,
    pathMatch: 'full',
  },

  {
    path: 'colecao',
    component: ColecaoComponent,
    pathMatch: 'full',
  },

  {
    path: 'cad-livro',
    component: CadLivroComponent,
    pathMatch: 'full',
  },

  {
    path: 'sobre-painel',
    component: SobrePainelComponent,
    pathMatch: 'full',
  },

  {
    path: 'supporte-painel',
    component: SupportePainelComponent,
    pathMatch: 'full',
  },

  {
    path: 'todos-livros',
    component: TodosLivrosComponent,
    pathMatch: 'full',
  },

  {
    path: 'atu-colecao',
    component: AtuColecaoComponent,
    pathMatch: 'full',
  }
];
