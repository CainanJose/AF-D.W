import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})

export class UserService{
    url: string = "http://localhost:3001/users/6668ef3bfa230c48d4a3a234";
    constructor(private http: HttpClient){}

    getUser(){
        return this.http.get<any>(this.url).pipe(
            map((response)=>{
                return response;
            })
        );
    }
}
