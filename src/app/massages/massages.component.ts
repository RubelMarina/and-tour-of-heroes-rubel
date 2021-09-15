import { Component, OnInit } from '@angular/core';
import {MassagesService} from "../massages.service";

@Component({
  selector: 'app-massages',
  templateUrl: './massages.component.html',
  styleUrls: ['./massages.component.css']
})
export class MassagesComponent implements OnInit {

  constructor(public massageService: MassagesService) { }

  ngOnInit(): void {
  }

}
