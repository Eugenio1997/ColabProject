import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ColabProject';
  isOpen: boolean = true; //default value for sidenav

  constructor(
    private _router: Router,
      ){
      }


  @ViewChild('sidenav')
  public sidenav!: MatSidenav;

  toggleSidenav(isOpen: boolean) {
    this.sidenav.opened = isOpen;
  }


  loadUserList(){
    console.log("list user");
    this._router.navigate(['/userList']);
  }


}

