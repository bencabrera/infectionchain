import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	public isLoggedIn: boolean = false;
	public jwtToken: string;
    constructor(private http: HttpClient) {
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/login`, { username, password })
            .pipe(map(response => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('jwt_token', JSON.stringify(response.jwt_token));
				this.isLoggedIn = true;
            }));
    }

    logout() {
        // remove user from local storage to log user out
		this.jwtToken = undefined;
        localStorage.removeItem('jwt_token');
		this.isLoggedIn = false;
    }
}
