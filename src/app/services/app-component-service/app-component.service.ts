import { Injectable } from '@angular/core';
import { JsonService } from '../Json/json.service';
import { Cv } from 'src/app/entities/cv';

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {

  constructor(
    private json: JsonService
    ) { }

  cvUrl = 'assets/data.json';

  async retrieveData(): Promise<Cv> {
    return await this.json.read(this.cvUrl).toPromise();
  }

  createTitle(cv: Cv): string {
    return 'CV' + (cv ? ' - ' + cv.name.concat(' ', cv.surname) : '');
  }
}
