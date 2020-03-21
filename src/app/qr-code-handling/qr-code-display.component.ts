import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QrService } from './qr.service';

@Component({
	selector: 'app-qr-code-display',
	templateUrl: './qr-code-display.component.html',
	styleUrls: ['./qr-code-display.component.scss']
})
export class QrCodeDisplayComponent implements OnInit {

	constructor(private router: Router, private qrService: QrService) { }

	qrCode: string = "hallo";

	ngOnInit(): void {
		this.qrService.getQrCode().subscribe((qrCode) => {
			this.qrCode = qrCode;
		});
	}

	toQrReader() {
		this.router.navigate(['/qr-code-reader']);
	}
}
