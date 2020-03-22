import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss']
})
export class CompleteProfileComponent implements OnInit {


  profilForm: FormGroup;
  journeyForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.profilForm = this.fb.group({
      name: ['', Validators.required],
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
    this.router.navigate(['/travels']);
  }
}
