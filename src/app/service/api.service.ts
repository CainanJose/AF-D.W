import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})

export class UserService{
    url: string = "http://localhost:3001/users";
    constructor(private http: HttpClient){}


    getUser(){
        const userId = localStorage.getItem('userId')
        return this.http.get<any>(this.url+"/"+userId).pipe(
            map((response)=>{
                return response;
            })
        );
    }
}
