import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/user';
// export class User {
//   name!: String;
//   email!: String;
//   password!: String;
// }
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  url = "http://localhost:8000/api/";
  // User registration
  register(user: User): Observable<any> {
    return this.http.post(this.url+'register', user);
  }
  signin(user: User): Observable<any> {
    return this.http.post<any>(this.url+'login', user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get(this.url+'user-profile');
  }
}
