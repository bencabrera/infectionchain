import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss']
})
export class CompleteProfileComponent implements OnInit {


  profilForm: FormGroup;
  journeyForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.profilForm = this.fb.group({
      birthday: [null, Validators.required],
      phone: [],
      street: [],
      zip: [],
      city: [],
      country: ['Deutschland'],
      img: [],
      correctness: [false, Validators.requiredTrue],
    });

  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {

    const value = this.profilForm.value;
    this.http.post(`${environment.apiUrl}/users/address`, {
      city: value.city,
      country: value.country,
      postalCode: value.zip,
      streetname: value.street,
      type: ''
    }).subscribe(response => {
      this.router.navigate(['/travels']);
    });
  }
}
