import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-completed',
  templateUrl: './profile-completed.component.html',
  styleUrls: ['./profile-completed.component.scss']
})
export class ProfileCompletedComponent implements OnInit {

  emails: string[] = [''];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onEmailAdd() {
    this.emails = [...this.emails, ''];
  }

  onDashboard() {
    this.router.navigate(['/']);
  }

  onEmailSend() {
    // TODO
  }
}
