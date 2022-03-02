import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_map from 'highcharts/modules/map';
const worldMap = require('@highcharts/map-collection/countries/mx/mx-all.geo.json')
HC_map(Highcharts);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public data: any[] = [
    ['mx-3622', 0],
    ['mx-bc', 1],
    ['mx-bs', 2],
    ['mx-so', 3],
    ['mx-cl', 4],
    ['mx-na', 5],
    ['mx-cm', 6],
    ['mx-qr', 7],
    ['mx-mx', 8],
    ['mx-mo', 9],
    ['mx-df', 10],
    ['mx-qt', 11],
    ['mx-tb', 12],
    ['mx-cs', 13],
    ['mx-nl', 14],
    ['mx-si', 15],
    ['mx-ch', 16],
    ['mx-ve', 17],
    ['mx-za', 18],
    ['mx-ag', 19],
    ['mx-ja', 20],
    ['mx-mi', 21],
    ['mx-oa', 22],
    ['mx-pu', 23],
    ['mx-gr', 24],
    ['mx-tl', 25],
    ['mx-tm', 26],
    ['mx-co', 27],
    ['mx-yu', 28],
    ['mx-dg', 29],
    ['mx-gj', 30],
    ['mx-sl', 31],
    ['mx-hg', 32]
  ];

  Highcharts: typeof Highcharts = Highcharts;

  chartMap: Highcharts.Options = {
    chart: {
      map: worldMap as any,
    },
    title: {
      text: 'Highcharts Maps - basic demo'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    legend: {
      enabled: true
    },
    colorAxis: {
      min: 0
    },
    series: [{
      name: 'Random data',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      },
      allAreas: false,
      data: this.data
    } as Highcharts.SeriesMapOptions,
    ]
  };
}
