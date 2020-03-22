import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { NotLoggedInGuard } from './auth/not-logged-in.guard';

import { SignUpComponent } from './sign-up/sign-up.component';
import { QrCodeReaderComponent } from './qr-code-handling/qr-code-reader.component';
import { QrCodeDisplayComponent } from './qr-code-handling/qr-code-display.component';
import { LoginComponent } from './auth/login.component';
import { LogoutComponent } from './auth/logout.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { TravelsComponent } from './travels/travels.component';
import { ProfileCompletedComponent } from './profile-completed/profile-completed.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MyFavoritPlacesComponent } from './my-favorit-places/my-favorit-places.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
    // public
    {path: 'start', component: StartComponent, canActivate: [NotLoggedInGuard]},
    {path: 'login', component: LoginComponent, canActivate: [NotLoggedInGuard]},
    {path: 'logout', component: LogoutComponent},
    {path: 'sign-up', component: SignUpComponent, canActivate: [NotLoggedInGuard]},

    {path: 'complete-profile', component: CompleteProfileComponent, canActivate: [AuthGuard]},
    {path: 'profile-completed', component: ProfileCompletedComponent, canActivate: [AuthGuard]},
    {path: 'travels', component: TravelsComponent, canActivate: [AuthGuard]},

    // logged in
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {path: '', component: HomeComponent, canActivate: [AuthGuard]},
        ]
    },
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            { path: 'profile', component: MyProfileComponent},
            { path: 'fav-places', component: MyFavoritPlacesComponent},
            { path: 'timeline', component: TimelineComponent },
            { path: 'contacts', component: ContactsComponent },
            {path: 'qr-code-reader', component: QrCodeReaderComponent},
            {path: 'qr-code-display', component: QrCodeDisplayComponent},
        ]
    },

	{ path: 'complete-profile', component: CompleteProfileComponent, canActivate: [AuthGuard] },
	{ path: 'profile-completed', component: ProfileCompletedComponent, canActivate: [AuthGuard] },
	{ path: 'travels', component: TravelsComponent, canActivate: [AuthGuard] },

];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
