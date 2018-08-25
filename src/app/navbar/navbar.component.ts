import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarWidth = 4;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  increase(){
    this.navbarWidth = 15;
    console.log("increase navbar width");
  }
  decrease(){
    this.navbarWidth = 4;
    console.log("decrease navbar width");
  }
}
