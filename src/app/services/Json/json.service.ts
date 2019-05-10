import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Cv} from '../../entities/cv';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }

  read(url: string): Observable<Cv> {
    return this.http.get<Cv>(url);
  }
}


