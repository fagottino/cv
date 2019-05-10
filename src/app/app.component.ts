import {Component, OnInit} from '@angular/core';
import {Cv} from './entities/cv';
import { Title } from '@angular/platform-browser';
import { SocialLink } from './entities/social-link';
import { WorkExperiences } from './entities/work-experiences';
import { Educations } from './entities/educations';
import { AppComponentService } from './services/app-component-service/app-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './css/customStyle.css']
})

export class AppComponent implements OnInit {

  cv: Cv;
  pages: number[] = [1, 2, 3, 4];

  constructor(
    private appComponentService: AppComponentService,
    private titleService: Title
  ) {}

  async ngOnInit() {
    this.cv = await this.appComponentService.retrieveData();
    const title = this.createTitle();
    this.titleService.setTitle(title);
  }

  newEducation = (index: number, education: Educations) => {
    console.log('jquery -> ' + index + ' ---- ' + document.getElementById('con').clientHeight);
      if (education.title === 'Corso Web Design') {
        console.log('entrato nell\'if');
        this.addPage();
      }
      this.addPage();
  }

  createTitle(): string {
    return 'CV - ' + this.cv.name.concat(' ', this.cv.surname);
  }

  addPage(): void {
    this.pages.push(this.pages.length + 1);
  }
}
