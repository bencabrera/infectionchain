import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// qr code functionality
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgxKjuaModule } from 'ngx-kjua';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { QrCodeReaderComponent } from './qr-code-handling/qr-code-reader.component';
import { QrCodeDisplayComponent } from './qr-code-handling/qr-code-display.component';

@NgModule({
	declarations: [
		AppComponent,
		SignUpComponent,
		QrCodeReaderComponent,
		QrCodeDisplayComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ZXingScannerModule,
		NgxKjuaModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
