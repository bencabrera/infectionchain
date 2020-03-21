import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  travelForm: FormGroup;
  constructor(private bsRef: MatBottomSheetRef<TravelComponent>, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.travelForm = this.fb.group({
      countryName: ['Deutschland'],
      countryCode: ['de'],
      from: [null, Validators.required],
      to: [null, Validators.required],
      notice: [],
    });
  }

  onSubmit() {
    this.bsRef.dismiss(this.travelForm.value);
  }

  onCancel() {
    this.bsRef.dismiss(undefined);
  }

}
