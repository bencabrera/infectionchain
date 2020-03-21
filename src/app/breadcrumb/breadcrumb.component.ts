import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  @Input()
  title: string;

  constructor(private location: Location, private router: Router) { }


  onBack() {
    this.location.back();
    this.router.navigate(['/']);
  }

}
