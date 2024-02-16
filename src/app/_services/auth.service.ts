import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(
      AUTH_API + 'authenticate',
      {
        email,
        password,
      },
      this.httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(
      AUTH_API + 'register',
      {
        username,
        email,
        password,
      },
      this.httpOptions
    );
  }

  refreshToken(): Observable<void> {
    return this.http.post<void>(
      AUTH_API + 'refresh-token',
      {},
      { withCredentials: true } // This is added to send credentials along with the request
    );
  }

  logout(): Observable<any> {
    return this.http.post<any>(AUTH_API + 'logout', {}, this.httpOptions);
  }
}
