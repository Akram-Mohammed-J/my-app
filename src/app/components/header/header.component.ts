import { Component, NgModule, OnInit } from '@angular/core';
import {Data}from "../../Data"
import {data} from "../../mock-data"
import { faIoxhost } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  data:Data=data;
  faIoxhost=faIoxhost;
  centered = false;
  disabled = false;
  unbounded = false;
  color= "grey";
  constructor() { }

  ngOnInit(): void {
  }

}
