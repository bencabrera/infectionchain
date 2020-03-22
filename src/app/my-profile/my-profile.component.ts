import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelModel } from '../models/travel.model';
import { TravelComponent } from '../travel/travel.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  profile = {
    name: 'Michael Jackson II.',
    email: 'jackonalive@gmail.com',
    street: 'Jakobsweg 3',
    zip: '10717',
    city: 'Berlin',
    phone: '0177123123123'
  };

  journeys: TravelModel[] = [{
    countryName: 'Italien',
    countryCode: 'it',
    from: new Date(2020, 2, 1),
    to: new Date(2020, 2, 15),
  }];

  constructor(private fb: FormBuilder, private router: Router, private bs: MatBottomSheet) { }

  ngOnInit(): void {

  }


  onAdd() {
    this.bs.open(TravelComponent).afterDismissed().subscribe(travel => {
      if (travel) {
        this.journeys.push(travel);
      }
    });
  }
}
