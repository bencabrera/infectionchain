import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../models/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  filters: string[] = ['Alle'];
  selectedFilter: string = 'Alle';

  contacts: ContactModel[] = [];
  constructor() { }

  ngOnInit(): void {
    this.contacts = [{
      name: 'Alina Berger',
      description: 'zuletzt gesehen am 02.02.2019'
    }, {
      name: 'Berta Burgermann',
      description: 'ist momentan in China'
    }, {
      name: 'Beth Shawn',
      description: '"Ich bin in selbstquarantäne"'
    }, {
      name: 'Rev Shawn',
      description: '01575843111'
    }];
  }

}
