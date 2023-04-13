import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private baseURL: string = 'https://randomuser.me/api/' + "?results=100";

  constructor(private http: HttpClient) { }

  public getApiUsers():Observable<any>{
    return this.http.get(this.baseURL);
  }

}