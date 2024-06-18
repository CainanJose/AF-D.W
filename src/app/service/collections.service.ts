import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, map } from "rxjs";



@Injectable({
    providedIn: "root"
})

export class CollectionService{

    colecao= {
        name: '',
         };
    
    private url: string = "http://localhost:3001/collections";
   
    private collections:any[]=[]


    constructor(private http: HttpClient,private router: Router){}

    getCollections():Observable<any>{
        return this.http.get<any>(this.url).pipe(
            map((response)=>{
                console.log(response);
                return response;
            })
        )
    }


    // getCollecSingle():Observable<any>{
    //     const idCollection = localStorage.getItem('idCollection')
    //     //console.log(idCollection);
    //     return this.http.get<any>(this.url+"/"+idCollection).pipe(
    //         map((response)=>{
    //             //console.log(idCollection);
                
    //             return response.name;
    //         })
    //     )
    // }
    
    criarColecao(newCollection: any) { // Método renomeado para criarColecao
        this.http.post('http://localhost:3001/collections', JSON.stringify(newCollection), {
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

    deleteColecao(){
        const idCollection = localStorage.getItem('idCollection');

        this.http.delete('http://localhost:3001/collections'+"/"+idCollection).subscribe({
          next: () => {
            this.router.navigate(['painel']); // Redirecionar para a lista de livros
           console.log("to aqui");
           
          },
          error: (error) => {
            console.error('Erro ao excluir livro:', error);
            // Lógica para lidar com o erro
          }
        });
    }

    atualizar(colecao: any) { 
        const idCollection = localStorage.getItem('idCollection')
        const idLivro = localStorage.getItem('idLivro')
        this.http.patch('http://localhost:3001/collections'+"/"+idCollection, JSON.stringify(colecao), {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }).subscribe({
          next: () => {
            this.router.navigate(['todos-livros']);
          },
            error: (error) => {
              
              console.error('Erro ao criar coleção:', error);
            }
          });
      }
}