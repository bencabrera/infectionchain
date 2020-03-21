import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthStateService } from './auth-state.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authState: AuthStateService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        if (this.authState.isLoggedIn && this.authState.jwtToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authState.jwtToken}`
                }
            });
        }

        return next.handle(request);
    }
}
