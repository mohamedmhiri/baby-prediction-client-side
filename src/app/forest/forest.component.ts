import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forest',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.css']
})
export class ForestComponent implements OnInit {
  data = ''
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRandomForest().subscribe(data => {
      this.data = JSON.stringify(data)
      console.log(this.data)
    })
     
  }

}
