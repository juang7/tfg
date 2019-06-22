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
    console.log('/usuario/' + user);
    console.log('a' + user);
    return this.http.get('/usuario/' + user);
    
  }

 postUser(user: any) {


    let postData = user;
   console.log('a'+user);
    return this.http.post("/usuario", postData, this.options)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  putUser(user: any) {


    return this.http.put("/usuario/"+user.id, user, this.options)
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
