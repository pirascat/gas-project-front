import { Injectable     } from "@angular/core";
import { HttpClient     } from "@angular/common/http";
import { Observable     } from "rxjs";
import { map            } from "rxjs/operators";

@Injectable({
    providedIn : "root"
})
export class DataService 
{
    constructor (private http: HttpClient) {}

    public get(): Observable<any> 
    {
        let url: string = "http://localhost:3000/getData"
        return this.http.get(url)
            .pipe(
                map((response: any) => {
                    return response;
                })
            );
    }
}
