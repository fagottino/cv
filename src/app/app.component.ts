import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Cv} from './entities/cv';
import {ReadJsonService} from '../services/readJson/read-json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'CV ';
  cv: Cv;

  constructor(
    private readJson: ReadJsonService
  ) {}

  ngOnInit() {
    this.getData();
}

  getData() {
    this.readJson.retrieveData().subscribe(
      resp => {
          this.cv = {...resp.body};
          this.title += this.cv.nameSurname;
          console.log(this.cv);
      },
      error => 'Errore nel recupero dei dati dal JSON'
    );
  }

  createItem() {
    
  }
}
