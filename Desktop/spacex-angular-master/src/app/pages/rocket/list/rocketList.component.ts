import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../../backend/spacex-api.service';

@Component({
  selector: 'app-page-rocket',
  templateUrl: './rocketList.component.html',
  styleUrls: ['./rocketList.component.scss']
})
export class RocketListComponent implements OnInit {
  rockets;

  constructor(private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.spacexApi.getRockets().subscribe(data => this.rockets = data);
  }

}
