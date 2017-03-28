import { Observable } from 'rxjs/Rx';
import { JsonObject } from './jsonObject';
import { Component, OnInit, Input } from '@angular/core';
import { JsonService } from "app/json.service";


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

    constructor(private jsonService: JsonService) {
        this.getJson4();
        //this.anyData = jsonService.getNew1();
     }

    ngOnInit(){
         this.getNew1()
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
         return this.jsonService.getNew1().subscribe(res => this.anyData = res)
     }
     
}