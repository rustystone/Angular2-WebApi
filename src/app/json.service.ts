import { AppConfig } from './app.config';
import { Observable } from 'rxjs/Rx';
import { JsonObject } from './jsonObject';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
//import './rxjs-extensions';

//import 'rxjs/Rx';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/toPromise';



import { Injectable } from "@angular/core";



//var config = require('config.json')('../../sample.json');

@Injectable()
export class JsonService {
    //private apiUrl = this.getConfiguration("publicJson").subscribe((result) => result)
    private apiUrl = "http://jsonplaceholder.typicode.com/posts/1"
    //private apiUrl = "http://127.0.0.1:3000/getJSONnumberextra/55/77"
    private result;
    

    constructor(private http:Http, private config:AppConfig){}

    getConfiguration(key) {
    return this.http.get('../../sample.json').map(res => {
        this.result = res.json();
        return this.result[key];
        });
    }

    getApiUrl():any{
        //return this.apiUrl;
        
        return this.config.getConfig('publicJson');
    }

    getJson():Observable<JsonObject>{   
        //return this.http.get(this.apiUrl).map((res:any) => res.json());
        return this.http.get(this.getApiUrl()).map(this.extractData);
    }

    getJson2():Observable<string>{   
        //return this.http.get(this.apiUrl).map((res:any) => res.json());
        return this.http.get(this.getApiUrl()).map(this.extractData2);
    }

    getJson3():Promise<JsonObject>{
        return this.http.get(this.getApiUrl())
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
            .get(this.getApiUrl())
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
        return this.http.get(this.getApiUrl())
            .map(data => data.json());
    }

    /*private handleError(error:any): Promise<any>{
        console.error("an error occurred", error);
        return Promise.reject(error.message || error);
    }*/
}