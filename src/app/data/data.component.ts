import { DataService } from './../data.service';
import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { Data } from './data'
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  form: FormGroup;
  payLoad = '';
  data: Data
  response = ''
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = new Data()
  }
  onSubmit(entry) {
    this.dataService.pushData(entry).subscribe(data => {
      this.response = data
      console.log(this.data)
    })
    this.payLoad = this.data.sick.toString();
  }

}
