import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	public isLoggedIn: boolean = false;
	public jwtToken: string;

	public logout() {
		this.isLoggedIn = false;
	}

	constructor() { }
}
