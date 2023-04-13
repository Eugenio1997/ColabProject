import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  isOpen: boolean = false;

  ngOnInit(): void {
  }

  @Output() toggleSidenav = new EventEmitter<boolean>();

  toggleDrawer() {
    this.toggleSidenav.emit(this.isOpen);
    this.isOpen = !this.isOpen;
  }

}
