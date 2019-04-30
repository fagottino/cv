import { Injectable } from '@angular/core';
import { ReadJsonService } from '../readJson/read-json.service';
import { Cv } from 'src/app/entities/cv';

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {

  constructor(private readJson: ReadJsonService) { }

  cvUrl = 'assets/data.json';

  async retrieveData(): Promise<Cv> {
    return await this.readJson.retrieveCvData(this.cvUrl).toPromise();
  }
}
