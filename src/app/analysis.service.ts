import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnalysisData } from './analysis-data';

@Injectable({
  providedIn: 'root',
})
export class AnalysisService {
  constructor(private httpClient: HttpClient) {}

  public getConnection(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/getConnection');
  }
}
