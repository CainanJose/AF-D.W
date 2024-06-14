import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class UserService{
    url: string = "http://localhost:3001/users";

    constructor(private http: HttpClient,private router: Router){}


    getUser(){
        const userId = localStorage.getItem('userId')
        return this.http.get<any>(this.url+"/"+userId).pipe(
            map((response)=>{
                return response.user;
            })
        );
    }

    atualizaUser(users: any) { 
        const userId = localStorage.getItem('userId')
        this.http.patch(this.url+"/"+userId, JSON.stringify(users), {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }).subscribe({
          next: () => {
            this.router.navigate(['painel']);
          },
            error: (error) => {
              
              console.error('Erro ao criar coleção:', error);
            }
          });
      }

      deleteUser(){
        const userId = localStorage.getItem('userId')
        this.http.patch(this.url+"/"+userId+"/delete", {
        }).subscribe({
          next: () => {
            console.log("aqui");
            this.router.navigate(['']);
            localStorage.clear();
          },
          error: (error) => {
            console.error('Erro ao excluir usuario:', error);
            // Lógica para lidar com o erro
          }
        });
    }

}

