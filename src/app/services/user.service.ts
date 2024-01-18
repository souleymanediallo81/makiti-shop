import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { CommendeUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CommendeUserService {

  private url = "http://localhost:3000/users"
  constructor(private http: HttpClient) { }


  addUserCommende(commendeUser:CommendeUser):Observable<CommendeUser>{
      return this.http.post<CommendeUser>(`${this.url}`,commendeUser);
  }

  searchCommendeUserByTel(keyword:string): Observable<Array<CommendeUser>>{
    return this.http.get<Array<CommendeUser>>(`${this.url}?tel_like=${keyword}`);
}
}
