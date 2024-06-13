import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";



@Injectable({
    providedIn: "root"
})

export class CollectionService{
    private url: string = "http://localhost:3001/collections";
   
    private collections:any[]=[]


    constructor(private http: HttpClient){}

    getCollections():Observable<any>{
        return this.http.get<any>(this.url).pipe(
            map((response)=>{
                return response;
            })
        )
    }
    postCollection(){}

}