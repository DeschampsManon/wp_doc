import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexApiService } from '../../../backend/spacex-api.service';
import { Rocket } from '../../../models/rocket';

@Component({
  selector: 'app-rocket-details',
  templateUrl: './rocketDetails.component.html',
  styleUrls: ['./rocketDetails.component.scss']
})
export class RocketDetailsComponent implements OnInit {

  rocket: Rocket;

  constructor(private route: ActivatedRoute, private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.spacexApi.getRocketById(params['id']).subscribe(rocket => this.rocket = rocket);
    });
  }

}
