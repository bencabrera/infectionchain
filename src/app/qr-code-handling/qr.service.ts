import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class QrService {

    constructor(private http: HttpClient) {}

    getQrCode() {

		const requestOptions: Object = {
			responseType: 'text'
		};

        return this.http.get<any>(`${environment.apiUrl}/qr-code`, requestOptions);
    }

	registerContactEvent(scannedQr) {
        return this.http.post<any>(`${environment.apiUrl}/contact-event`, {
			scannedQrCode: scannedQr,
			"locationEvent" : {
				"latitude": 52.5045318,
				"longitude": 13.3886752
			}
		});
	}

    // registerContactEvent(user: RegistrationModel) {
        // return this.http.post<any>(`${environment.apiUrl}/reg`, user)
            // .pipe(map(response => {
                // // store user details and jwt token in local storage to keep user logged in between page refreshes
                // localStorage.setItem('jwt_token', JSON.stringify(response.jwt_token));
                // this.authState.isLoggedIn = true;
            // }));
    // }
}
