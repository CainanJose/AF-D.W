import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";



@Injectable({
    providedIn: "root"
})

export class BookService{
    private url: string = "http://localhost:3001/collections";
    private idColection: string =""
   
    private books:any[]=[]


    constructor(private http: HttpClient){}

    getAllBooks():Observable<any>{
        //para implementar o get livros
        const idCollection = localStorage.getItem('id')
        return this.http.get<any>(this.url+"/"+idCollection+"/books").pipe(
            map((response)=>{
                return response;
            })
        )
    }

    getBook():Observable<any>{
        return this.http.get<any>(this.url).pipe(
            map((response)=>{
                return response;
            })
        )
    }
    postCollection(){}

}