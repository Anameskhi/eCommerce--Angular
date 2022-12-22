import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "./base.service";
import {Login, LoginResponse, Register} from "../interfaces/auth";
import {Observable, tap} from "rxjs";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  get token(): string | null {
    return localStorage.getItem('token');
  }

  get user(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  login(payload: Login): Observable<LoginResponse> {
    return this.post<LoginResponse>('auth/login', payload)
      .pipe(
        tap((response: LoginResponse) => {
            this.setToken(response.accessToken);
            this.setUser(response.user);
          }
        )
      )
  }

  register(payload: Register): Observable<LoginResponse> {
    return this.post<LoginResponse>('auth/signup', payload)
    .pipe(
      tap((response: LoginResponse) => {
          this.setToken(response.accessToken);
          this.setUser(response.user);
        }
      )
    )

  }


  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logOut() {
    localStorage.clear();
  }
}