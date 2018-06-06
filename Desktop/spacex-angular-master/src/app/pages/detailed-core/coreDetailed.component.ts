import { CoresDetails } from '../../models/coresDetails';
import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../backend/spacex-api.service';

@Component({
  selector: 'app-page-detailed-core',
  templateUrl: './coreDetailed.component.html',
  styleUrls: ['./coreDetailed.component.scss']
})
export class CoreDetailedComponent implements OnInit {

  coresDetails: CoresDetails;

    constructor(private spacexApi: SpacexApiService) { }

    ngOnInit() {
      this.spacexApi.getCoresDetails().subscribe(data => this.coresDetails = data);
    }

}
