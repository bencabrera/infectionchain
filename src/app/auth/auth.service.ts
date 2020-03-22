import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { flatMap, map } from 'rxjs/operators';

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

        return this.http.post(`${environment.apiUrl}/users`, {
            ...user,
            userName: user.email
        }, {
            responseType: 'text'
        }).pipe(flatMap(response => {
            return this.login(user.email, user.password);
        }));
    }
}
