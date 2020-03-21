// https://openlayers.org/en/latest/examples/mouse-position.html
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { defaults as defaultControls } from 'ol/control';
import {defaults as defaultInteractions, DragRotateAndZoom} from 'ol/interaction';
import OSM from 'ol/source/OSM';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import ZoomToExtent from 'ol/control/ZoomToExtent';
import MousePosition from 'ol/control/MousePosition';
import {createStringXY} from 'ol/coordinate';

@Component({
	selector: 'app-map-picker',
	templateUrl: './map-picker.component.html',
	styleUrls: ['./map-picker.component.scss']
})
export class MapPickerComponent implements AfterViewInit {

	mapId: string;
	map: Map;

	constructor() { }

	ngAfterViewInit() {
		var mousePositionControl = new MousePosition({
			coordinateFormat: createStringXY(4),
			projection: 'EPSG:4326',
			// comment the following two lines to have the mouse position
			// be placed within the map.
			className: 'custom-mouse-position',
			target: document.getElementById('mouse-position'),
			undefinedHTML: '&nbsp;'
		});

		this.map = new Map({
			interactions: defaultInteractions().extend([
				new DragRotateAndZoom()
			]),
			target: 'map',
			layers: [
				new TileLayer({
					source: new OSM()
				})
			],
			// layers: [
				// new TileLayer({
					// source: new XYZ({
						// url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					// })
				// })
			// ],
			view: new View({
				center: [813079.7791264898, 5929220.284081122],
				zoom: 7
			}),
			// controls: defaultControls().extend([
				// new ZoomToExtent({
					// extent: [
						// 813079.7791264898, 5929220.284081122,
						// 848966.9639063801, 5936863.986909639
					// ]
				// })
			// ])
		});

		var projectionSelect = document.getElementById('projection');
		projectionSelect.addEventListener('change', function(event) {
			mousePositionControl.setProjection((event.target as any).value);
		});

		var precisionInput = document.getElementById('precision');
		precisionInput.addEventListener('change', function(event) {
			var format = createStringXY((event.target as any).valueAsNumber);
			mousePositionControl.setCoordinateFormat(format);
		});
	}

}
