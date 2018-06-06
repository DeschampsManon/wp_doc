import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexApiService } from '../../../backend/spacex-api.service';
import { Launchpad } from '../../../models/launchpad';
import { Launch } from '../../../models/launch';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpadDetails.component.html',
  styleUrls: ['./launchpadDetails.component.scss']
})
export class LaunchpadDetailsComponent implements OnInit {

  launchpad: Launchpad;
  launches: Launch;

  constructor(private route: ActivatedRoute, private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.spacexApi.getLaunchpadById(params['id']).subscribe(launchpad => this.launchpad = launchpad);
      this.spacexApi.getFilteredLaunches({site_id: params['id']})
        .subscribe(launches => this.launches = launches);
    });
  }

}
