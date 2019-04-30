import {Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {Cv} from './entities/cv';
import { Title } from '@angular/platform-browser';
import { SocialLink } from './entities/social-link';
import { WorkExperiences } from './entities/work-experiences';
import { Education } from './entities/education';
import { AppComponentService } from './services/app-component-service/app-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './css/customStyle.css']
})

export class AppComponent implements OnInit {
  cv: Cv;
  pages: number[] = [];

  constructor(
    private appComponentService: AppComponentService,
    private titleService: Title
  ) {}

  async ngOnInit() {
    this.cv = await this.appComponentService.retrieveData();
    const title = this.createTitle();
    this.titleService.setTitle(title);
    this.pages.push(1);
  }

  newElement(index: number, element: Education) {
      console.log('jquery -> ' + index + ' ---- ' + document.getElementById('con').clientHeight);
      if (element.title === 'Corso Web Design') {
        console.log('entrato nell\'if');
      }
  }

  newPage(index: number, element) {
    console.log(index + ' newPage');
  }

  createTitle(): string {
    return 'CV ' + this.cv.name + ' ' + this.cv.surname;
  }
}
