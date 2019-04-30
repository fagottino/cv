import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Cv} from '../../../app/entities/cv';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadJsonService {

  constructor(private http: HttpClient) { }

  retrieveCvData(url: string): Observable<Cv> {
    return this.http.get<Cv>(url);
  }
}


