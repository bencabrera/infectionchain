import { Component, OnInit } from '@angular/core';
import { EventModel } from '../models/event.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

    months = ['März'];

    selectedMonth = 'März';

    events: EventModel[];

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {

        this.http.get<{
            locationEvent: {
                externalId: string,
                latitude: number,
                longitude: number,
                name: string
            },
            timestamp: string,
            username1: string,
            username2: string
        }[]>(`${environment.apiUrl}/contact-event?authenticated=true&credentials=%7B%7D&details=%7B%7D&principal=%7B%7D`).subscribe(data => {

            this.events = [
                ...this.events,
                ...(data.map( d => {
                    const date = moment(d.timestamp).toDate();
                    return {
                        title: `Kontakt mit ${d.username1} und  ${d.username2}`,
                        begin: date,
                        icon: 'contactless'
                    };
                 }
                )),
            ];

        });

        this.events = [
            {
                title: 'Zuhause',
                begin: new Date(2020, 2, 19, 3, 0),
                to: new Date(2020, 2, 19, 12, 37),
                icon: 'home'
            },
            {
                title: 'Elena Gozderova',
                begin: new Date(2020, 2, 19, 13, 0),
                to: new Date(2020, 2, 19, 17, 15),
                status: 'green',
                img: 'https://s3-alpha-sig.figma.com/img/4c25/d654/ea3044cf6777a6eabd16f51e145c70c3?Expires=1585526400&Signature=LlOhcqSm9AGurTu2VMx5nHkl0czyRKWvqIzRK-7bGJDALjo-dWd9~Hn3caeEEDBvdEpH6FBDr-AAUxdpMQOvvaKiEyXRRrfKSe256vXnZFDgUUN7jAfLpF6wyu1f~B5EAZK69iixUMh9oS2RdJXZCV1u0g5F5alWxL-vjFrRWiRtDmBc~Tif0LjYtJAYZ3F0gUmL3cCYfDHFJ1x4BZaiImGY9-OXk6FVzFMA-hZjalZNSnfxTjxhPfoO~k6Z6UqyzpuSXv9Jb9WfutlpGnZ48omecvcpukR5cIxmwdZsrdoYE5TB8QQlwJuEV5jLfhWtwxpEK75BBa7ykwr~FjmkDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            },
            {
                title: 'Fussball Verein',
                begin: new Date(2020, 2, 19, 13, 0),
                to: new Date(2020, 2, 19, 17, 15),
                description: 'Elena + 16 weitere Freunde',
                img: 'https://s3-alpha-sig.figma.com/img/2f87/a064/e2337660b008a320ea04b4f228e07913?Expires=1585526400&Signature=UWVYA0sQ69T0acm9vhT2E9Jlz-BhTKF8jQIVYsZQFVThV6GcCMtLzLxX7-V5hD238WvRSy6h9dynhL1JbnR4HyLOPc~VKShH~-TUdLmY3SHCBaM38GKcUqVNIhGlr2txU3DxAWsPJpe-NwDJufRyZlXv4fKYNvXde9KT7oBF87bsikkSIvA7fB83pyFBmotigurJ3C7mPbkdJ0vtre2RHAtGxpGNGow78yxNszUNgXv1M67CDReIoQ5HHvMDmaUQ7AidGIrkf07upDsvCeixuwhh~3fXbmXAyc-kwdUfi7~59tqW6chUA~x23yMpEw0ZUwwMApxfYT26NRNAuXRl1w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            },
            {
                title: 'Zuhause',
                begin: new Date(2020, 2, 19, 17, 30),
                to: new Date(2020, 2, 19, 17, 50),
                icon: 'home',
            },
            {
                title: 'Tankstelle Shell',
                begin: new Date(2020, 2, 19, 17, 55),
                to: new Date(2020, 2, 19, 18, 0),
                status: 'green',
                img: 'https://s3-alpha-sig.figma.com/img/a98e/af22/41027f9aea81977c82ceb3e04f87904b?Expires=1585526400&Signature=NjWaPJ~8LOAPyNGVnKXZPCSdJJojxlG67JtC6x7OPpwBDQPeekIP7rWjGsvZdoyE6OFhQ9RWDaTHNNbjbxF65soyla1iH-WzM8sdaeh0pS7jrVpFmzBsRReTJeNiBKd9CiM1BX8koYdE7FLM3g-4wjjDutNTnbKvMNi4COXsgdTuNLzp-vg6ayviHi~jCPx4BB-LWByAQcsn2nZ76m5svQido1xnNDXOyLsKitTCJ2ZSL4iOTKhA3NMw9xLx2JCxXEb1WpYlv~tG6i4SUXBmOux5mVlDY3bqWAQRwtnxyCcEOQddrL8Wt72QSemLkgMp8np7Don31FbFdEPXmbBA8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            },
            {
                title: 'Alnatura Westend',
                begin: new Date(2020, 2, 19, 18, 15),
                to: new Date(2020, 2, 19, 19, 0),
                status: 'green',
                img: 'https://s3-alpha-sig.figma.com/img/f4cb/a886/fe07c0ec85c9104f3069872f94e41aa6?Expires=1585526400&Signature=YoAMSFLhwPQ6BLzvaxuL2EC-gcBz~0kqgnP6qk~kEheq1UV0KAJpLPRAWQEZVFV8hr-00nwyonjB1vN~a1KwnoM-QY6uSrMCtSSjOH8FMzOC-JlMkdtt1s-VPG2wvqgydLHgJ~fDYhWSgvlRA4p1I07uXkIYFyKaVGwwXwQzqr2bFqH-CvqVkvxl123ihHTyX3iZ-rhwYXfiofxSLgijXo4SDGZtHAfFJxkDgWaxwWE9zMQ2kde7smtmbiqcgSx331gYPWjZQP6PpXHY5Zb50g6idKA8q7dajm3OBYf4E4Mn7oUUUGLqg-NGFcqN~-a4MXLtESQexF7wvVmDtavI-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            },
            {
                title: 'Zuhause',
                begin: new Date(2020, 2, 20, 3, 0),
                to: new Date(2020, 2, 20, 12, 37),
                icon: 'home'
            },
            {
                title: 'Bio Company',
                begin: new Date(2020, 2, 20, 13, 0),
                to: new Date(2020, 2, 20, 13, 30),
            },
        ];
    }

    eventsByDate(): Map<Date, EventModel[]> {

        const dateMap = new Map<string, EventModel[]>();
        this.events.forEach(e => {

            const date = e.begin.toLocaleDateString();
            const entries = dateMap.get(e.begin.toLocaleDateString());
            if (!entries) {
                dateMap.set(date, [e]);
            } else {
                entries.push(e);
            }
        });

        const returnMap = new Map();
        dateMap.forEach((v, k) => {
            const d = new Date(v[0].begin.toDateString());
            returnMap.set(d, v);
        });

        return returnMap;
    }

    sortNull(a,b) { return 0; }
}
