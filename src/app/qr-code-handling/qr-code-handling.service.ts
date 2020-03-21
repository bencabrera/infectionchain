import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class QrCodeHandlingService {

	private _qrCodeToken$: ReplaySubject<string> = new ReplaySubject<string>();
	public qrCodeToken$: Observable<string> = this._qrCodeToken$.asObservable();

	public getPersonalQrToken() {
		if(!this.qrCodeToken) 
        return this.http.get<any>(`${environment.apiUrl}/qr-code`)
            .pipe(map(response => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
				this.qrCodeToken = response.qr_token;
            }));
	}

	constructor(private http: HttpClient) { }
}
