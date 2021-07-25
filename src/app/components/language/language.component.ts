import { Component, OnInit } from '@angular/core';
import {data } from "../../mock-data"
import {Data} from "../../Data"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
data:Data=data;
faArrowRight = faArrowRight;
  constructor() { }

  ngOnInit(): void {
  }

}
