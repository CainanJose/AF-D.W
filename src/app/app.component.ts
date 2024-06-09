import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SupportComponent } from "./pages/support/support.component";
import { AboutComponent } from "./pages/about/about.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, HomeComponent, SignupComponent, NavbarComponent, SupportComponent, AboutComponent]
})
export class AppComponent {
  title = 'AF-D.W';
}
