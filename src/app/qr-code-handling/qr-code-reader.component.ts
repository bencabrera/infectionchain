import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-qr-code-reader',
  templateUrl: './qr-code-reader.component.html',
  styleUrls: ['./qr-code-reader.component.scss']
})
export class QrCodeReaderComponent implements OnInit, AfterViewInit {

    hasCameras = false;
    hasPermission: boolean;
    qrResultString: string;

	message: string = "";

    availableDevices: MediaDeviceInfo[];
    selectedDevice: MediaDeviceInfo = null;

    @ViewChild('scanner')
    scanner: ZXingScannerComponent;

	constructor() { }

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
        this.scanner.camerasFound.subscribe(
			(devices: MediaDeviceInfo[]) => {
				console.log(devices);

				this.hasCameras = true;
				if(devices.length == 0)
					this.hasCameras = false;

				this.availableDevices = devices;

				if(this.availableDevices.length == 1)
					this.selectedDevice = this.availableDevices[0];
				else
				{
					// selects the devices's back camera
					for (const device of devices) {
						if (/back|rear|rück|environment/gi.test(device.label)) {
							this.selectedDevice = device;
							break;
						}
					}
				}

				// if(!this.selectedDevice)
				// {
					// this.message = "Das verwendete Gerät wird nicht unterstützt oder hat keine Kamera auf der Rückseite.";
				// }

				// this.scanner.restartScan();
			}
		);

		this.scanner.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) => {
			this.hasCameras = false;
			this.message = "Das verwendete Gerät wird nicht unterstützt oder hat keine Kameras.";
		});

		this.scanner.permissionResponse.subscribe((answer: boolean) => {
			this.hasPermission = answer;

			if(!answer)
				this.message = "ResearchDesk hat keine Erlaubnis auf die Kamera zuzugreifen. Bitte aktivieren Sie Kamerazugriff.";
		});
	}

    handleQrCodeResult(resultString: string) {
		console.log(resultString);

		// this.public_patient_service.check_if_patient_exists(pid).subscribe((result) => {
			// if(result)
			// {
				// let patient_token = result;
				// this.router.navigate(["patient", patient_token]);
			// }
			// else
				// this.router.navigate(["consent", pid]);
		// });


        this.qrResultString = resultString;
    }
}
