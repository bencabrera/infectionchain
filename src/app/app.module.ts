import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// qr code functionality
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgxKjuaModule } from 'ngx-kjua';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { QrCodeReaderComponent } from './qr-code-handling/qr-code-reader.component';
import { QrCodeDisplayComponent } from './qr-code-handling/qr-code-display.component';

// auth
import { LoginComponent } from './auth/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { ErrorInterceptor } from './auth/error.interceptor';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { FakeBackendInterceptor, fakeBackendProvider } from './auth/fake-backend.interceptor';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './auth/logout.component';
import { StartComponent } from './start/start.component';
import {MatButtonModule} from "@angular/material/button";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
	declarations: [
		AppComponent,
		SignUpComponent,
		QrCodeReaderComponent,
		QrCodeDisplayComponent,
		LoginComponent,
		HomeComponent,
		LogoutComponent,
		StartComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
		ZXingScannerModule,
		NgxKjuaModule,

		FlexLayoutModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		// { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
		{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}},

        // provider used to create fake backend
        // fakeBackendProvider
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
