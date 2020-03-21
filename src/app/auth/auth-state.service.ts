import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthStateService {

    public isLoggedIn = false;
    public jwtToken: string;

    constructor() {
        let tmp = localStorage.getItem('jwt_token');
        if (tmp) {
            this.jwtToken = tmp;
            this.isLoggedIn = true;
        }
    }

    login(jwtToken) {
        this.jwtToken = jwtToken;
        localStorage.setItem('jwt_token', jwtToken);
        this.isLoggedIn = true;
    }

    logout() {
        // remove user from local storage to log user out
        this.jwtToken = undefined;
        localStorage.removeItem('jwt_token');
        this.isLoggedIn = false;
    }
}
