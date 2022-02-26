import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_KEY = 'API_KEY_TEST';

  constructor(private httpClient: HttpClient) {}
}
