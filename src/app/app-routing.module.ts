import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { SignUpComponent } from './sign-up/sign-up.component';
import { QrCodeReaderComponent } from './qr-code-handling/qr-code-reader.component';
import { QrCodeDisplayComponent } from './qr-code-handling/qr-code-display.component';
import { LoginComponent } from './auth/login.component';
import { LogoutComponent } from './auth/logout.component';
import { HomeComponent } from './home/home.component';
import {StartComponent} from "./start/start.component";


const routes: Routes = [
	// public
	{ path: 'start', component: StartComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'logout', component: LogoutComponent },
	{ path: 'sign-up', component: SignUpComponent },

	// logged in
	{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'qr-code-reader', component: QrCodeReaderComponent, canActivate: [AuthGuard] },
	{ path: 'qr-code-display', component: QrCodeDisplayComponent, canActivate: [AuthGuard] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
