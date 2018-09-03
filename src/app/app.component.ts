import { Component, OnInit } from '@angular/core';
import { GlobalService } from './services/global.service';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private router: Router,
    public global: GlobalService
  ) { }

  ngOnInit() {

  }


}
