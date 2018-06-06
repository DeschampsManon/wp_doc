import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../backend/spacex-api.service';

@Component({
  selector: 'app-page-detailed-capsule',
  templateUrl: './capsuleDetailed.component.html',
  styleUrls: ['./capsuleDetailed.component.scss']
})
export class CapsuleDetailedComponent implements OnInit {

  capsulesDetails;

    constructor(private spacexApi: SpacexApiService) { }

    ngOnInit() {
      this.spacexApi.getCapsulesDetails().subscribe(data => this.capsulesDetails = data);
    }

}
