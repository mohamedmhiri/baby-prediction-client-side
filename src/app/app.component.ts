import { DataService } from './data.service';
import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { Data } from './data/data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  form: FormGroup;
  payLoad = '';
  @Input() data: Data
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = new Data()
  }
  onSubmit(entry) {
    this.dataService.pushData(entry).subscribe(data => {
      this.data = data
    })
    this.payLoad = JSON.stringify(this.data);
  }
}
