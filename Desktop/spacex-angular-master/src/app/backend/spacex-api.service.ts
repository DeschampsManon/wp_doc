import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Launch} from '../models/launch';
import {LaunchOptions} from '../models/launchOptions';
import {CompanyInfo} from '../models/companyInfo';
import {Rocket} from '../models/rocket';
import {Capsule} from '../models/capsule';
import {CapsulesDetails} from '../models/capsulesDetails';
import {Launchpad} from '../models/launchpad';
import {CoresDetails} from '../models/coresDetails';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {
  baseUrl = 'https://api.spacexdata.com/v2';

  constructor(private restClient: HttpClient) { }

  getCompanyInfos(): Observable<CompanyInfo> {
    const requestEndpoint = this.baseUrl + '/info';
    return this.restClient.get<CompanyInfo>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRockets(): Observable<Rocket> {
    const requestEndpoint = this.baseUrl + '/rockets';
    return this.restClient.get<Rocket>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRocketById(id: String): Observable<Rocket> {
    const requestEndpoint = this.baseUrl + '/rockets/' + id;
    return this.restClient.get<Rocket>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCapsules(): Observable<Capsule> {
    const requestEndpoint = this.baseUrl + '/capsules';
    return this.restClient.get<Capsule>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCapsuleById(id: String): Observable<Capsule> {
    const requestEndpoint = this.baseUrl + '/capsules/' + id;
    return this.restClient.get<Capsule>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCapsulesDetails(): Observable<CapsulesDetails> {
    const requestEndpoint = this.baseUrl + '/parts/caps';
    return this.restClient.get<CapsulesDetails>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCoresDetails(): Observable<CoresDetails> {
    const requestEndpoint = this.baseUrl + '/parts/cores';
    return this.restClient.get<CoresDetails>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getLatestLaunches(): Observable<Launch> {
    const requestEndpoint = this.baseUrl + '/launches/latest';
    return this.restClient.get<Launch>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPastLaunches(): Observable<Launch> {
    const requestEndpoint = this.baseUrl + '/launches';
    return this.restClient.get<Launch>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllLaunches(): Observable<Launch> {
    const requestEndpoint = this.baseUrl + '/launches/all';
    return this.restClient.get<Launch>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }


  getUpcomingLaunches(): Observable<Launch> {
    const requestEndpoint = this.baseUrl + '/launches/upcoming';
    return this.restClient.get<Launch>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }


  getFilteredLaunches(options: LaunchOptions): Observable<Launch> {
    const optionParams = new URLSearchParams();
    for (const key in options) {
      optionParams.set(key, options[key]);
    }

    const requestEndpoint = this.baseUrl + '/launches';
    const queryParams = {params : optionParams};
    return this.restClient.get<Launch>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getLaunchpads(): Observable<Launchpad> {
    const requestEndpoint = this.baseUrl + '/launchpads';
    return this.restClient.get<Launchpad>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getLaunchpadById(id: String): Observable<Launchpad> {
    const requestEndpoint = this.baseUrl + '/launchpads/' + id;
    return this.restClient.get<Launchpad>(requestEndpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
