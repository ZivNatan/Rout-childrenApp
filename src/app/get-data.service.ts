import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class GetDataService {

  constructor(private http:HttpClient) { }


  public getList(): Observable<any> {
         return this.http.get("../assets/data.json")

  }

}
