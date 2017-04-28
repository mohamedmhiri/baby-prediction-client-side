import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  pushData(data) {
    var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if(data.temperature < 36.5 || data.temperature > 37.5 || data.heartbear < 120 )
          data.sick = 1
        else data.sick = 0
        return this.http.post('http://localhost:8000/data/', JSON.stringify(data),
         { headers: headers }) .map(response => response.json());
  }
  getRandomForest() {
    return this.http.get('http://localhost:8000/forest/')
            .map(res => res.json());
  }
}
