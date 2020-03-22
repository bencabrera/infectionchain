import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {


    regForm: FormGroup;
    public loading = false;
    public error?: string;

    public returnUrl?: string;

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    }

    ngOnInit(): void {

        this.regForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(4)]],
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }


    onReg() {
        this.loading = true;

        this.authService.reg(this.regForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/complete-profile']);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }

    onLogin() {
        this.router.navigate(['login'], {queryParams: {returnUrl: this.returnUrl}});
    }

}
