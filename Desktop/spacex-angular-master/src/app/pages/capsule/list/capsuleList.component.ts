import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../../backend/spacex-api.service';

@Component({
  selector: 'app-page-capsule',
  templateUrl: './capsuleList.component.html',
  styleUrls: ['./capsuleList.component.scss']
})
export class CapsuleListComponent implements OnInit {

  capsules;

    constructor(private spacexApi: SpacexApiService) { }

    ngOnInit() {
      this.spacexApi.getCapsules().subscribe(data => this.capsules = data);
    }
}
