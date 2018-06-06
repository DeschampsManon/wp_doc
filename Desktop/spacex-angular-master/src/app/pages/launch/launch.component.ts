import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../backend/spacex-api.service';
import {Launch} from '../../models/launch';

@Component({
  selector: 'app-page-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

  launches: Launch;
  pastLaunches: Launch;
  upcomingLaunches: Launch;
  latestLaunches: Launch;

  constructor(private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.spacexApi.getAllLaunches().subscribe(data => this.launches = data);
    this.spacexApi.getPastLaunches().subscribe(data => this.pastLaunches = data);
    this.spacexApi.getUpcomingLaunches().subscribe(data => this.upcomingLaunches = data);
    this.spacexApi.getLatestLaunches().subscribe(data => this.latestLaunches = data);
  }

}
