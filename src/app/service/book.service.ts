import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, map } from "rxjs";



@Injectable({
    providedIn: "root"
})

export class BookService{
    private url: string = "http://localhost:3001/collections";
   
    private books:any[]=[]
    


    atuLivro = {
      title: '',
      author:'',
      description:''
       };

    

    constructor(private http: HttpClient,private router: Router){}

    criarLivro(livro: any) { 
        const idCollection = localStorage.getItem('idCollection')
        this.http.post('http://localhost:3001/collections'+"/"+idCollection+"/books", livro, {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }).subscribe({
          next: () => {
            this.router.navigate(['todos-livros']);
          },
            error: (error) => {
              console.log(this.atuLivro);
              
              console.error('Erro ao criar coleção:', error);
            }
          });
      }
    
    getAllBooks():Observable<any>{
        //para implementar o get livros
        const idCollection = localStorage.getItem('idCollection')
        return this.http.get<any>(this.url+"/"+idCollection+"/books").pipe(
            map((response)=>{
                return response.books;
            })
        )
    }

    getBook():Observable<any>{
        const idLivro = localStorage.getItem('idLivro')
        const idCollection = localStorage.getItem('idCollection')
        return this.http.get<any>(this.url+"/"+idCollection+"/books/"+idLivro).pipe(
            map((response)=>{
                return response.book;
            })
        )
    }

    deleteBook(){
        const idCollection = localStorage.getItem('idCollection');
      const idLivro = localStorage.getItem('idLivro');
      
      console.log("idCollection:", idCollection, "idLivro:", idLivro); // Verificar os valores
      
      if (idCollection && idLivro) { // Verificar se os IDs existem antes de fazer a requisição
        this.http.delete('http://localhost:3001/collections'+"/"+idCollection+"/books"+"/"+idLivro).subscribe({
          next: () => {
            this.router.navigate(['todos-livros']); // Redirecionar para a lista de livros
            // ou this.atualizarListaDeLivros(); // Atualizar a lista na página atual
          },
          error: (error) => {
            console.error('Erro ao excluir livro:', error);
            // Lógica para lidar com o erro
          }
        });
      } else {
        // Tratar caso os IDs não existam
        console.error("ID da coleção ou ID do livro não encontrado no localStorage.");
      }
    }

    atualizar(livro: any) { 
        const idCollection = localStorage.getItem('idCollection')
        const idLivro = localStorage.getItem('idLivro')
        this.http.patch('http://localhost:3001/collections'+"/"+idCollection+"/books"+"/"+idLivro, JSON.stringify(livro), {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }).subscribe({
          next: () => {
            this.router.navigate(['livro']);
          },
            error: (error) => {
              
              console.error('Erro ao criar coleção:', error);
            }
          });
      }


}