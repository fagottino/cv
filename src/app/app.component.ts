import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Cv} from '../entities/cv';
import {ReadJsonService} from '../services/readJson/read-json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CV Antonio Orlando';

  readJson: ReadJsonService;
  cv: Cv;

  ngOnInit() {
    this.showConfigResponse();
}

  showConfigResponse() {
    this.readJson.getConfigResponse()
      .subscribe(resp => {
          // access the body directly, which is typed as `Config`.
          this.cv = {...resp.body};
          console.log(this.cv);
        },
        error1 => 'Errore');
  }
}
