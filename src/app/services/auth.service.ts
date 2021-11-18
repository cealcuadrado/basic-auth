import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.url}/users/authenticate`, {
        username,
        password,
      })
      .pipe(
        catchError((error: any): Observable<any> => {
          return of(error);
        })
      );
  }
}
