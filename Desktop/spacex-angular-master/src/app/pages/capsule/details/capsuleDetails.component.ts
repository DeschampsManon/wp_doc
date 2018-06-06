import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexApiService } from '../../../backend/spacex-api.service';
import { Capsule } from '../../../models/capsule';

@Component({
  selector: 'app-capsule-details',
  templateUrl: './capsuleDetails.component.html',
  styleUrls: ['./capsuleDetails.component.scss']
})
export class CapsuleDetailsComponent implements OnInit {

  capsule: Capsule;

  constructor(private route: ActivatedRoute, private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.spacexApi.getCapsuleById(params['id']).subscribe(capsule => this.capsule = capsule);
    });
  }

}
