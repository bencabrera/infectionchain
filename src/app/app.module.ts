import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// qr code scanner
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { QrCodeReaderComponent } from './qr-code-handling/qr-code-reader.component';

@NgModule({
	declarations: [
		AppComponent,
		SignUpComponent,
		QrCodeReaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ZXingScannerModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
