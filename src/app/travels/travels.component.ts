import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { TravelComponent } from '../travel/travel.component';
import { TravelModel } from '../models/travel.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-travels',
    templateUrl: './travels.component.html',
    styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {

    constructor(private bs: MatBottomSheet, private router: Router) {
    }


    journeys: TravelModel[] = [{
        countryName: 'Italien',
        countryCode: 'it',
        from: new Date(2020, 2, 1),
        to: new Date(2020, 2, 15),
    }];

    ngOnInit(): void {

    }

    onBack() {
        this.router.navigate(['/complete-profile']);
    }

    onSubmit() {
        // TODO save
        this.router.navigate(['/profile-completed']);
    }

    onAdd() {
        this.bs.open(TravelComponent).afterDismissed().subscribe(travel => {
            if (travel) {
                this.journeys.push(travel);
            }
        });
    }

    finalLabel() {
        return this.journeys.length === 0 ? 'Nein, ich bin hier gewesen' : 'Profil speichern';
    }
}
