import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../../backend/spacex-api.service';
import { Launchpad } from '../../../models/launchpad';

@Component({
  selector: 'app-page-launchpad',
  templateUrl: './launchpadList.component.html',
  styleUrls: ['./launchpadList.component.scss']
})
export class LaunchpadListComponent implements OnInit {

  launchpads: Launchpad;

  constructor(private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.spacexApi.getLaunchpads().subscribe(data => this.launchpads = data);
  }

}
