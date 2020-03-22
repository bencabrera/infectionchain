import { Component, OnInit } from '@angular/core';
import { AuthStateService } from './auth-state.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: []
})
export class LogoutComponent implements OnInit {

	constructor(private authState: AuthStateService, private router: Router){}

	ngOnInit(): void {
		this.authState.logout();
		this.router.navigate(['start']);
	}

}
