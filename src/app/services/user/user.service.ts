import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const apiUrl = 'https://testbankapi.firebaseio.com/clients.json';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient
  ) {

  }


  postuser(client) {
    return this.http.post<any>(apiUrl, client).toPromise()
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }

  getuser() {
    return this.http.get<any>(apiUrl).toPromise()
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }
}
