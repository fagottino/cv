import {Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Input} from '@angular/core';
import {Cv} from './entities/cv';
import { Title } from '@angular/platform-browser';
import { SocialLink } from './entities/social-link';
import { WorkExperiences } from './entities/work-experiences';
import { Educations } from './entities/educations';
import { AppComponentService } from './services/app-component-service/app-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './css/customStyle.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {

  cv: Cv = new Cv();
  workExperiences: WorkExperiences[][] = [];
  educations: Educations[][] = [];
  cvTemp: Cv;
  pages: number[] = [1];
  pageNumber: number = 0;
  activeSection: string = "workExperiences";

  constructor(
    private appComponentService: AppComponentService,
    private titleService: Title,
    private ref: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.cv = await this.appComponentService.retrieveData();
    const title = this.createTitle();
    this.titleService.setTitle(title);
    this.setWorkExperience();
    this.setEducations();
  }

  setWorkExperience(): void {
    this.activeSection = "workExperiences";
    this.cv.workExperiences.forEach(wE => {
      !this.workExperiences[this.pageNumber] ? this.workExperiences[this.pageNumber] = [] : null;
      this.workExperiences[this.pageNumber].push(wE);
      this.ref.detectChanges();
    })
  }

  setEducations(): void {
    this.activeSection = "educations";
    this.cv.educations.forEach(e => {
      !this.educations[this.pageNumber] ? this.educations[this.pageNumber] = [] : null;
      this.educations[this.pageNumber].push(e);
      this.ref.detectChanges();
    });
  }

  doNewPage(): void {
    switch(this.activeSection) {
      case "workExperiences":
        if (this.workExperiences[this.pageNumber] && this.workExperiences[this.pageNumber].length > 0) {
          this.workExperiences[this.pageNumber + 1] = [];
          this.workExperiences[this.pageNumber + 1].push(this.workExperiences[this.pageNumber].pop());
          console.log('page changed by workExperiences ');
        }
      break;
      case "educations":
        if (this.educations[this.pageNumber] && this.educations[this.pageNumber].length > 0) {
          this.educations[this.pageNumber + 1] = [];
          this.educations[this.pageNumber + 1].push(this.educations[this.pageNumber].pop());
          console.log('page changed by education ');
        }
      break;
      default:
      break;
    }
    if (this.pages.length < 6) {
      this.pages.push(this.pages.length + 1);
      this.pageNumber = this.pages.length - 1;
      this.ref.detectChanges();
    }
  }

  setActive(section: string): void {
    this.activeSection = section;
  }

  createTitle(): string {
    return 'CV' + (this.cv ? ' - ' + this.cv.name.concat(' ', this.cv.surname) : '');
  }
}
