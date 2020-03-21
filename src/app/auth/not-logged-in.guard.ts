import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthStateService } from './auth-state.service';

@Injectable({ providedIn: 'root' })
export class NotLoggedInGuard implements CanActivate {
    constructor(
        private router: Router,
        private authState: AuthStateService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authState.isLoggedIn) {
            return true;
        }

        // not logged in so redirect to login page with the return url
		this.router.navigate(['']);
        return false;
    }
}
