import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    regForm: FormGroup;

	constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

	ngOnInit(): void {
        this.regForm = this.fb.group({
            'email': ['', [Validators.required, Validators.email]],
            'password': ['', [Validators.required, Validators.minLength(1)]],
        });

		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

	onLogin() {
		this.authService.login(this.regForm.value.email, this.regForm.value.password)
			// .pipe(first())
			.subscribe(
				data => {
					// this.router.navigate([this.returnUrl]);
					this.router.navigate(['']);
				},
				error => {
					this.error = error;
					this.loading = false;
				});
	}
}
