import { AppConfig } from './app.config';
import { Observable } from 'rxjs/Rx';
import { JsonObject } from './jsonObject';
import { Component, OnInit, Input, APP_INITIALIZER } from '@angular/core';
import { JsonService } from "app/json.service";
import {Router} from '@angular/router'


@Component({
    selector: 'viewJson',
    templateUrl: './viewJson.component.html'
})
export class ViewJsonComponent implements OnInit {
    @Input() jsonObject: JsonObject;
    @Input() someText: string;
    @Input() someText2: string = "hello";
    @Input() jobj: JsonObject;

    anyData: any;

    constructor(private jsonService: JsonService, private config:AppConfig) {
        this.getJson4();
        //this.anyData = jsonService.getNew1();
     }

    ngOnInit(){
         this.getNew1()
         setTimeout(() => 
            {
                //this.router.navigate(['/']);
            },
            2000);
     }

    

    getJson() {
        this.jsonService
            .getJson()
            .subscribe(
                jsonObject => this.someText = jsonObject.message
            )
     }

     getJson2() {
        this.jsonService
            .getJson()
            .map(
                someText => this.someText = "hello again"
            )
     }

     getJson3(){
         this.jsonService
            .getJson3()
            .then(jobj => this.jobj = jobj);
     }

     getJson4(){
         console.log('logging: viewJson.component.getJson4');
         console.log('jsonObject ' +  this.jsonObject)
         console.log('someText ' +  this.someText)
         console.log('someText2 ' +  this.someText2)
         this.jsonService
            .getJson4()
            .subscribe(p => this.jsonObject = p);
     }

     getNew1(){
         console.log(this.config.getEnv('env'))
         console.log(this.config.getConfig('publicJson'));

         return this.jsonService.getNew1().subscribe(res => this.anyData = res)
         //return this.jsonService.getNew1().map(res => this.anyData = res)
     }
     
}