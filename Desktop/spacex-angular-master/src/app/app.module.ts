import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { LaunchComponent } from './pages/launch/launch.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PageCompanyComponent } from './pages/company/page-company.component';
import { RocketListComponent } from './pages/rocket/list/rocketList.component';
import { LaunchpadListComponent } from './pages/launchpad/list/launchpadList.component';
import { CapsuleDetailedComponent } from './pages/detailed-capsule/capsuleDetailed.component';
import { CoreDetailedComponent } from './pages/detailed-core/coreDetailed.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LaunchpadDetailsComponent } from './pages/launchpad/details/launchpadDetails.component';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';

import { RocketDetailsComponent } from './pages/rocket/details/rocketDetails.component';
import { CapsuleListComponent } from './pages/capsule/list/capsuleList.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CapsuleDetailsComponent } from './pages/capsule/details/capsuleDetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    HeaderComponent,
    HomeComponent,
    PageCompanyComponent,
    RocketListComponent,
    CapsuleListComponent,
    LaunchpadListComponent,
    CapsuleDetailedComponent,
    CoreDetailedComponent,
    FooterComponent,
    LaunchpadDetailsComponent,
    LaunchpadDetailsComponent,
    RocketDetailsComponent,
    CapsuleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    NgHttpLoaderModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
