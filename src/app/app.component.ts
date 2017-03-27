import { JsonService } from './json.service';
import { JsonObject } from './jsonObject';
import { ViewJsonComponent } from './viewJson.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JsonService]
})
export class AppComponent {
  private jsonObject:JsonObject
  
  constructor(private viewJson:ViewJsonComponent, private jsonService:JsonService){}
  
  title = 'app works fin!';
  //service = this.jsonService.getJson()
  //title = this.jsonObject.message;
  
  ngOnInit(){
    console.log('logging: app.component.ngOnInit')
    this.viewJson.getJson4();
  }

}
