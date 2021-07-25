import { Component } from '@angular/core';
import {data} from "./mock-data"
import {Data} from "./Data"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:Data=data;
  title = 'my-app';
}
