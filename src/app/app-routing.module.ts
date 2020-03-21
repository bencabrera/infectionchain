import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpComponent } from './sign-up/sign-up.component';
import { QrCodeReaderComponent } from './qr-code-handling/qr-code-reader.component';
import { QrCodeDisplayComponent } from './qr-code-handling/qr-code-display.component';


const routes: Routes = [
	{ path: 'sign-up', component: SignUpComponent },
	{ path: 'qr-code-reader', component: QrCodeReaderComponent },
	{ path: 'qr-code-display', component: QrCodeDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
