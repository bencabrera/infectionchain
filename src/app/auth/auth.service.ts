import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { RegistrationModel } from '../models/registration.model';
import { AuthStateService } from './auth-state.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private authState: AuthStateService) {}

    login(email: string, password: string) {

		const requestOptions: Object = {
			responseType: 'text'
		};

        return this.http.post<any>(`${environment.apiUrl}/users/login`, {
				"email": email,
				"password": password
			},
			requestOptions
			)
            .pipe(map(response => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
				this.authState.login(response);
            }));
    }

    reg(user: RegistrationModel) {
        return this.http.post<any>(`${environment.apiUrl}/reg`, user)
            .pipe(map(response => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('jwt_token', response.jwt_token);
                this.authState.isLoggedIn = true;
            }));
    }
}
