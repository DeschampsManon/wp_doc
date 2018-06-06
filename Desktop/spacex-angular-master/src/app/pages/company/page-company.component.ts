import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../backend/spacex-api.service';

@Component({
  selector: 'app-page-company',
  templateUrl: './page-company.component.html',
  styleUrls: ['./page-company.component.scss']
})
export class PageCompanyComponent implements OnInit {

  infos;

  constructor(private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.spacexApi.getCompanyInfos().subscribe(data => this.infos = data);
  }

}
