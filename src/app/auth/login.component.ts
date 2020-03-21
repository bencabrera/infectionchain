import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public loading: boolean = false;
	public error: string;

	public username: string = "";
	public password: string = "";

	public returnUrl: string = "";

	constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

	onSubmit() {
		console.log("onsubmit");
		this.loading = true;
		this.authService.login(this.username, this.password)
			.pipe(first())
			.subscribe(
				data => {
					this.router.navigate([this.returnUrl]);
				},
				error => {
					this.error = error;
					this.loading = false;
				});
	}
}
