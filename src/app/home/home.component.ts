import { Component, OnInit } from '@angular/core';
import { icon, LatLng, latLng, LatLngLiteral, Layer, MapOptions, marker, polygon, tileLayer } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options: MapOptions = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 14,
    zoomControl: undefined
  };

  layers: Layer[] = [];

  center: LatLngLiteral = new LatLng(50,5);

  lastUpdated = new Date();

  recommendations = [
    {
      img: 'https://s3-alpha-sig.figma.com/img/13ce/d717/ee69b0464b3573eaf645e65e7635efbd?Expires=1585526400&Signature=Qqu00Y9B3ULLUTQ-iUFi-TqUVJU6zFOCJeFxsGbxeN8D-i2XidmudaM-jaUyg9AguO43QZ4YDDuhuYy1HY1gXLMWQsHsucv~OKSlaQ6QrCO6MrLOpPkEUR1c2CJYdaoAQsfpPg4hbF8fzjcFgkA6DFoGH2f-45U0aPuGm5cPSHCPtvICdy4u9XAf-ng4Wh7dKCEeF~W0YvjhTovLJVWKSMKkdzfBa97bUzu3xozGTIoTstWlgTXO2yhRYcP~W62jighTn-tsHsmeeX1RGy-Q0rhZ76AdhHHZTACBOusQfcrGvQAScLy8Ls9n~FR5Sb5FvZB8p3a14iDJB4Eub3DqAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      name: 'Alnatura',
      status: 'red'
    }, {
      img: 'https://s3-alpha-sig.figma.com/img/e5bf/cf2a/ff5312f2c061b8467feb49e3322465dd?Expires=1585526400&Signature=hhvbPXJl6MrPt5y68E8WwDHun3N6-l3aYHyV8o278jU0S-7sqExRTxR1U2imXP6WTM3xG5QQ4XJsShffNEpMFoJ3vCiO9-hvSXqYwjfwSgeWWKR7QB9Mlhiu7VAzDFY1m7EbwllUqYlZzCwhzGr4CJfCP0ooWUb758yf~FOMpx0fNQqelT0639W1yHWRvLBY8BOkt3TEvjMeFfUE2Y~wO~blpEMD8oRB7dAJ5EoaTEs2pPQv1gLsunm7b838xssec4yMGVbyFKqy3Q7-bw0eemW8ZFtn6sVO7QjCdgfoIrvcSbxmyzRlbodPTxyYNToUZA~czKVCOZnLVSk-iCDB7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      name: 'Hausarzt',
      status: 'green'
    }, {
      img: 'https://s3-alpha-sig.figma.com/img/c280/7fd1/8fa4df2dd195df9c1ed17d91457a89b6?Expires=1585526400&Signature=R1AqZBGr1qB13hr9uOFN1EK0vXWCNFnvtgYnDRyVstR1AuIMP8~QVNwFqvBSCgTPobezldVl6zewPewpu2bfMQNxtOg57M3E6vrNBqVUo9Zhc0Lzkg5T8IZgkrAfn6ZGAkIR2~nTBU-jaL22B1dzCDd2j9kZWoPqyBqSMuNtQOlGdLdNESrEdxxdmKgQngmOEDNlcxJvT~mq7uX1oTyvTROXUp-a7I-lpyDUDdJS8k3yAWQJsLXnLwwV1pBWw~gQgJEz9JTlBuOXBHKjPu4rdt00xlgD-3gTi3hWvGrmcuvN85O1jm-Oxl9zERsiOcgcz4BfdFNH43miTgvgaSsHtA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      name: 'Blutspende',
      status: 'green'
    }
  ];

  history = [
    {
      img: 'https://s3-alpha-sig.figma.com/img/b75b/9a7d/822a8a9cf07dfbd5d1c59ca929f20459?Expires=1585526400&Signature=GkcG9uLFWhnoLHa0qvSyItdFM8PPIR~SWp0IUOqad4AwFO-xKBRo33jHUCXlZVLxpy4R48KOV994WCcETDW0Qm63hnBtNKRLKoFnI3xWgWD6DooHkk6NFlVbepYZ8yYSTCJhu9BNZEcO~4txcrhfiRl199awrS7sb1AiLN7kk66KP17Np0lQtDJmE6HQWNvuaTJ67IFiv28JzrQ~IhAmbW1niXLoOxal1~wzCD9S6s0xTUmlomphCtYOMsbUEAb1zvdqkcpjsxmhg6yGq1MlyYTIzcBhjvH2v~x-2e8VsaiLgeQH3x07ogwBSF-6vYBRaYPqVFr1kQazl3MvsOx9ug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      name: 'Rotes Kreuz bittet um Blutspenden im Raum Frankfurt am Main...',
    },{
      img: 'https://s3-alpha-sig.figma.com/img/2e9b/9d54/2e768205daf86fabfc765cd429c91ee9?Expires=1585526400&Signature=bimmYbmxndkXRmpRapWIyO25lTeK96KRyNLNSp1WuqFLl4YVx6lB6hKZdvJujYa0QMAOCP0pe67BVCMThOLCST9kbNY6c9Aw4itbCcvePpAC-4R2kFxeLdZVmLYqORUWkovdJWBsU-DTABQ0ztOlTMkUC4~OYerjiVHt~3Mh-cnGMYidL~TXiDjYIa-wcyZmDQaeB9R0ss7ctDoNsQemPgccN23VYCUbc0mrjFw5JnlH5eB6VvIPkqJwSwU67Cb3Xjb-ji9kB0aVUwANmuKwWiQUVRYgDSMlkFoTIDgfcG2LNuZehWivD0O3b~e5vnZ7AE4CuoPLPwuVaEbsrqRHIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      name: 'Hessen bleibt vom 1.4 - 3.4 komplett Zuhause. Kompliment ...',
    },
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    // init pos map
    this.getCurrentPosition().then( pos => {
      this.layers = [marker(pos, {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      }),
        polygon([[ pos.lat+0.002, pos.lng + 0.002 ], [ pos.lat+0.005, pos.lng - 0.005 ], [ pos.lat+0.008, pos.lng + 0.008 ], [ pos.lat , pos.lng + 0.002 ]],
            {
              fillColor: 'red',
              lineCap: 'round',
              lineJoin: 'round',
              color: 'red',
            }),
      ];
      this.center = pos;
    });

  }

  getCurrentPosition(): Promise<LatLng> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

            resolve(new LatLng( resp.coords.latitude,  resp.coords.longitude));
          },
          err => {
            reject(err);
          });
    });

  }

}
