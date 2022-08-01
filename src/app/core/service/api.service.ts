import { catchError, map } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(protected http: HttpClient) {}

  get<T>(url: string, params?: HttpParams) {
    const fullURL = environment.API_END_POINT + url;
    if (environment.production) {
      return this.http
        .get(fullURL, {
          headers: this.getHeaders(),
          params: params,
        })
        .pipe(
          map((response) => response)
          // catchError(err=>{console.log(err)})
        );
    } else {
      return this.getMockData(url);
    }
  }

  protected post<T>(url: string) {}
  protected put<T>(url: string) {}
  protected delete<T>(url: string) {}

  protected getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getMockData(url: string): Observable<any> {
    return this.http.get('./assets/mock/' + url + '.json');
  }
}
