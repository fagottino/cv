import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cv} from '../../entities/cv';

@Injectable({
  providedIn: 'root'
})
export class ReadJsonService {

  constructor(private http: HttpClient) { }

  configUrl = 'assets/data.json';

  getConfigResponse(): Observable<HttpResponse<Cv>> {
    return this.http.get<Cv>(
      this.configUrl, { observe: 'response' });
  }
}


