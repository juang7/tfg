import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
	
    
    private options = {
     headers: new HttpHeaders({
     'Content-Type':  'application/json',
     'Accept': 'application/json'
    })
  };


  constructor(
    private http: HttpClient
  ) {}

  getUsers(user: any) {
    console.log('/usuario/1');
    return this.http.get('/usuario/1');
  }

 postUser(user: any) {


    let postData = user;

    return this.http.post("/usuario", postData, this.options)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  putUser() {

    let postData = {
    	"nombre": "modificado",
        "apellidos": "Gil",
        "email": "juan@gmail.com",
        "telefono": "658474964" 
      }

    return this.http.put("/usuario/2", postData, this.options)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  deleteUser(user: any) {

    return this.http.delete('/usuario/'+ user)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

}
