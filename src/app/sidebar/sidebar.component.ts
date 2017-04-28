import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  test: boolean = true
  constructor() { }

  ngOnInit() {
  }

  collapse(): boolean {
    if(this.collapse)
      this.test = false
    else
      this.test = true
    return this.test  
  }

}
