import { Observable } from 'rxjs/Rx';
import { JsonObject } from './jsonObject';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
//import './rxjs-extensions';

//import 'rxjs/Rx';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/toPromise';



import { Injectable } from "@angular/core";

@Injectable()
export class JsonService {
    private apiUrl = "http://127.0.0.1:3000/getJSONnumberextra/55/77";
    //private apiUrl = "http://jsonplaceholder.typicode.com/posts/1";
   

    constructor(private http:Http){}

    getJson():Observable<JsonObject>{   
        //return this.http.get(this.apiUrl).map((res:any) => res.json());
        return this.http.get(this.apiUrl).map(this.extractData);
    }

    getJson2():Observable<string>{   
        //return this.http.get(this.apiUrl).map((res:any) => res.json());
        return this.http.get(this.apiUrl).map(this.extractData2);
    }

    getJson3():Promise<JsonObject>{
        return this.http.get(this.apiUrl)
        .toPromise()
        .then(response => response.json().data as JsonObject)
    }

    private extractData(res:Response){
        let body = res.json();
        return body.data || {'message':'hello'};
    }

    private extractData2(res:Response){
        let body = res.json();
        return body.message || {'message':'hello'};
    }

    getJson4():Observable<JsonObject>{
        console.log('logging: json.service.getJson4')
        let obj = this.http
            .get(this.apiUrl)
            .map(this.mapJsonObject);
        return obj;
    }

    private mapJsonObject(response: Response): JsonObject{
        return this.toJsonObject(response.json());
    }

    private toJsonObject(r:any):JsonObject{
        let obj = <JsonObject>({
            message: r.message,
            status: r.status,
            computed: r.computed,
            computed2: r.computed2,
        });
        console.log('Persed: ', obj);
        return obj;
    }

    getNew1():any{
        return this.http.get(this.apiUrl)
            .map(data => data.json());
    }

    /*private handleError(error:any): Promise<any>{
        console.error("an error occurred", error);
        return Promise.reject(error.message || error);
    }*/
}