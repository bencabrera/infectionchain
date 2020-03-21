import { Component, OnInit } from '@angular/core';
import { AuthStateService } from './auth-state.service';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: []
})
export class LogoutComponent implements OnInit {

	constructor(private authState: AuthStateService){}

	ngOnInit(): void {
		this.authState.logout();
	}

}
