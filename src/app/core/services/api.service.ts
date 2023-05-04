import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private formatErrors(error: any) {
    return throwError(error.error);
  }

  constructor(private http: HttpClient) {
  }

  get(path: string): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`)
      .pipe(catchError(this.formatErrors));
  }
}
