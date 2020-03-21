import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { ErrorInterceptor } from './auth/error.interceptor';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { fakeBackendProvider } from './auth/fake-backend.interceptor';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './auth/logout.component';
import { StartComponent } from './start/start.component';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { TravelComponent } from './travel/travel.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { TravelsComponent } from './travels/travels.component';
import { ProfileCompletedComponent } from './profile-completed/profile-completed.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
    declarations: [
        AppComponent,
        SignUpComponent,
        QrCodeReaderComponent,
        QrCodeDisplayComponent,
        LoginComponent,
        HomeComponent,
        LogoutComponent,
        StartComponent,
        CompleteProfileComponent,
        TravelsComponent,
        TravelComponent,
        ProfileCompletedComponent
    ],
    imports: [
        CommonModule,
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
        MatIconModule,
        MatCheckboxModule,
        MatBottomSheetModule,
        MatCardModule,
        MatListModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}},

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    entryComponents: [
        TravelComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
