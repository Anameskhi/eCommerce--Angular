import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private accountService: AuthService,
    private  router: Router
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].includes(err.status) && this.accountService.user) {
                // auto logout if 401 or 403 response returned from api
                this.accountService.logOut();
                this.router.navigate(['/auth/login'])
            }

            const error = err.error?.message || err.statusText;
            console.error(err);
            return throwError(() => error);
        }))
    }

 
}
