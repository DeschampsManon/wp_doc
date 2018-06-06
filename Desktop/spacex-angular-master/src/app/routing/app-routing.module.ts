import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LaunchComponent } from '../pages/launch/launch.component';
import { HomeComponent } from '../pages/home/home.component';
import { PageCompanyComponent } from '../pages/company/page-company.component';
import { RocketListComponent } from '../pages/rocket/list/rocketList.component';
import { CapsuleListComponent } from '../pages/capsule/list/capsuleList.component';
import { LaunchpadListComponent } from '../pages/launchpad/list/launchpadList.component';
import { LaunchpadDetailsComponent } from '../pages/launchpad/details/launchpadDetails.component';
import { CapsuleDetailedComponent } from '../pages/detailed-capsule/capsuleDetailed.component';
import { CoreDetailedComponent } from '../pages/detailed-core/coreDetailed.component';
import { CapsuleDetailsComponent } from '../pages/capsule/details/capsuleDetails.component';
import { RocketDetailsComponent } from '../pages/rocket/details/rocketDetails.component';

const appRoutes: Routes = [
  {
    path: 'company',
    component: PageCompanyComponent
  },
  {
    path: 'rocket',
    component: RocketListComponent
  },
  {
    path: 'rocket/:id',
    component: RocketDetailsComponent
  },
  {
    path: 'capsule',
    component: CapsuleListComponent
  },
  {
    path: 'capsule/:id',
    component: CapsuleDetailsComponent
  },
  {
    path: 'launchpad',
    component: LaunchpadListComponent
  },
  {
    path: 'launchpad/:id',
    component: LaunchpadDetailsComponent
  },
  {
    path: 'launches',
    component: LaunchComponent
  },
  {
    path: 'detailed-capsule',
    component: CapsuleDetailedComponent
  },
  {
    path: 'detailed-core',
    component: CoreDetailedComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
