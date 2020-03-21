import { Component, OnInit } from '@angular/core';
import { EventModel } from '../models/event.model';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

    months = ['März'];

    selectedMonth = 'März';

    events: EventModel[];
    constructor() {
    }

    ngOnInit(): void {
      this.events = [
        {
          title: 'Zuhause',
          from: new Date(2020, 2, 19, 3, 0),
          to: new Date(2020, 2, 19, 12, 37),
        },
        {
          title: 'Elena Gozderova',
          from: new Date(2020, 2, 19, 13, 0),
          to: new Date(2020, 2, 19, 17, 15),
        },
        {
          title: 'Zuhause',
          from: new Date(2020, 2, 20, 3, 0),
          to: new Date(2020, 2, 20, 12, 37),
        },
        {
          title: 'Bio Company',
          from: new Date(2020, 2, 20, 13, 0),
          to: new Date(2020, 2, 20, 13, 30),
        },
      ];
    }

    eventsByDate(): Map<Date, EventModel[]> {

      const dateMap = new Map<string, EventModel[]>();
      this.events.forEach(e => {

        const date = e.from.toLocaleDateString();
        const entries = dateMap.get(e.from.toLocaleDateString());
        if (!entries) {
          dateMap.set(date, [e]);
        } else {
          entries.push(e);
        }
      });

      const returnMap = new Map();
      dateMap.forEach((v, k) => {
        returnMap.set(v[0].from.setHours(0,0,0,0), v);
      });

      return returnMap;
    }

}
