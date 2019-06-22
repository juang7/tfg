import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BarServiceProvider {
	
    
    private options = {
     headers: new HttpHeaders({
     'Content-Type':  'application/json',
     'Accept': 'application/json'
    })
  };


  constructor(
    private http: HttpClient
  ) {}

  getBar(bar: any) {
    return this.http.get('/bar/'+ bar);
  }

 postBar(bar: any) {


    let postData = bar;

    return this.http.post("/bar", postData, this.options)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  putBar(bar: any) {


    return this.http.put("/bar/"+bar.id, bar, this.options)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  deleteBar(bar: any) {

    return this.http.delete('/bar/'+ bar)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

}
