import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Cv } from './entities/cv';
import { Title } from '@angular/platform-browser';
import { SocialLink } from './entities/social-link';
import { WorkExperiences } from './entities/work-experiences';
import { Educations } from './entities/educations';
import { Knowledges } from './entities/knowledges'
import { AppComponentService } from './services/app-component-service/app-component.service';
import { AppSettings } from '../assets/app-settings'
import { Cms } from './entities/cms';
import { Languages } from './entities/languages';
import { SkillsAndCompetences } from './entities/skills-and-competences';
import { InterestsAndHobbies } from './entities/interests-and-hobbies';
import { Portfolio } from './entities/portfolio';
import { Contacts } from './entities/contacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './_layout/customStyle.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {

  cv: Cv = new Cv();
  workExperiences: WorkExperiences[][] = [];
  educations: Educations[][] = [];
  knowledges: Knowledges[][] = [];
  cms: Cms[][] = [];
  languages: Languages[][] = [];
  skillsAndCompetences: SkillsAndCompetences[][] = [];
  interestsAndHobbies: InterestsAndHobbies[][] = [];
  portfolio: Portfolio[][] = [];
  contacts: Contacts[][] = [];
  cvTemp: Cv;
  pages: number[] = [1];
  pageNumber: number = 0;
  activeSection: string = AppSettings.WORK_EXPERIENCES;

  constructor(
    private appComponentService: AppComponentService,
    private titleService: Title,
    private ref: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.cv = await this.appComponentService.retrieveData();
    const title = this.appComponentService.createTitle(this.cv);
    this.titleService.setTitle(title);
    this.setWorkExperience();
    this.setEducations();
    this.setKnowledges();
    this.setCms();
    this.setLanguages();
    this.setSkillsAndCompetences();
    this.setInterestsAndHobbies();
    //this.setPortfolio();
    this.setContacts();
  }

  setWorkExperience(): void {
    this.activeSection = AppSettings.WORK_EXPERIENCES;
    this.cv.workExperiences.forEach(wE => {
      !this.workExperiences[this.pageNumber] ? this.workExperiences[this.pageNumber] = [] : null;
      this.workExperiences[this.pageNumber].push(wE);
      this.ref.detectChanges();
    })
  }

  setEducations(): void {
    this.activeSection = AppSettings.EDUCATIONS;
    this.cv.educations.forEach(e => {
      !this.educations[this.pageNumber] ? this.educations[this.pageNumber] = [] : null;
      this.educations[this.pageNumber].push(e);
      this.ref.detectChanges();
    });
  }

  setKnowledges(): void {
    this.activeSection = AppSettings.KNOWLEDGES;
    for (let i = 0; i <= this.cv.knowledges.length; i++) {
      !this.knowledges[this.pageNumber] ? this.knowledges[this.pageNumber] = [] : null;
      for (let k = 0; k < 8; k++) {
        //if (this.cv.knowledges[0]) {
          this.knowledges[this.pageNumber].push(this.cv.knowledges.shift());
        //}
      }
      i = 0;
      this.ref.detectChanges();
    }
  }

  setCms(): void {
    this.activeSection = AppSettings.CMS;
    if (this.cv.cms) {
      this.cv.cms.forEach(c => {
        !this.cms[this.pageNumber] ? this.cms[this.pageNumber] = [] : null;
        for (let k = 0; k < 4; k++) {
          this.cms[this.pageNumber].push(this.cv.cms.shift());
        }
      });
    }
  }

  setLanguages(): void {
    this.activeSection = AppSettings.LANGUAGES;
    this.cv.languages.forEach(l => {
      !this.languages[this.pageNumber] ? this.languages[this.pageNumber] = [] : null;
      this.languages[this.pageNumber].push(l);
      this.ref.detectChanges();
    });
  }

  setSkillsAndCompetences(): void {
    this.activeSection = AppSettings.SKILLandCOMPETENCES;
    this.cv.skillsAndCompetences.forEach(sC => {
      !this.skillsAndCompetences[this.pageNumber] ? this.skillsAndCompetences[this.pageNumber] = [] : null;
      this.skillsAndCompetences[this.pageNumber].push(sC);
      this.ref.detectChanges();
    });
  }

  setInterestsAndHobbies(): void {
    this.activeSection = AppSettings.INTERESTSandHOBBIES;
    for (let i = 0; i <= this.cv.interestsAndHobbies.length; i++) {
      !this.interestsAndHobbies[this.pageNumber] ? this.interestsAndHobbies[this.pageNumber] = [] : null;
      for (let k = 0; k < 4; k++) {
        if (this.cv.interestsAndHobbies[0])
          this.interestsAndHobbies[this.pageNumber].push(this.cv.interestsAndHobbies.shift());
      }
      this.ref.detectChanges();
    }
  }

  setPortfolio(): void {
    this.activeSection = AppSettings.PORTFOLIO;
    this.cv.portfolio.forEach(p => {
      !this.portfolio[this.pageNumber] ? this.portfolio[this.pageNumber] = [] : null;
      this.portfolio[this.pageNumber].push(p);
      this.ref.detectChanges();
    });
  }

  setContacts(): void {
    this.activeSection = AppSettings.CONTACTS;
    for (let i = 0; i <= this.cv.contacts.length; i++) {
      !this.contacts[this.pageNumber] ? this.contacts[this.pageNumber] = [] : null;
      for (let k = 0; k < 3; k++) {
        if (this.cv.contacts[0])
          this.contacts[this.pageNumber].push(this.cv.contacts.shift());
      }
      this.ref.detectChanges();
    }
  }

  doNewPage(page: string): void {
    this.pages.push(this.pages.length + 1);
    this.pageNumber = this.pages.length - 1;
    switch(this.activeSection) {
      case AppSettings.WORK_EXPERIENCES:
        if (this.workExperiences[this.pageNumber] && this.workExperiences[this.pageNumber].length > 0) {
          this.workExperiences[this.pageNumber + 1] = [];
          this.workExperiences[this.pageNumber + 1].push(this.workExperiences[this.pageNumber].pop());
        }
      break;
      case AppSettings.EDUCATIONS:
        if (this.educations[this.pageNumber] && this.educations[this.pageNumber].length > 0) {
          this.educations[this.pageNumber + 1] = [];
        }
      break;
      case AppSettings.KNOWLEDGES:
        if (this.knowledges[this.pageNumber] && this.knowledges[this.pageNumber].length > 0) {
          this.knowledges[this.pageNumber + 1] = [];
        }
      break;
      case AppSettings.CMS:
        if (this.cms[this.pageNumber] && this.cms[this.pageNumber].length > 0) {
          this.cms[this.pageNumber + 1] = [];
        }
      break;
      case AppSettings.LANGUAGES:
        if (this.languages[this.pageNumber] && this.languages[this.pageNumber].length > 0) {
          this.languages[this.pageNumber + 1] = [];
        }
      break;
      case AppSettings.SKILLandCOMPETENCES:
        if (this.skillsAndCompetences[this.pageNumber] && this.skillsAndCompetences[this.pageNumber].length > 0) {
          this.skillsAndCompetences[this.pageNumber + 1] = [];
        }
      break;
      case AppSettings.INTERESTSandHOBBIES:
        if (this.interestsAndHobbies[this.pageNumber] && this.interestsAndHobbies[this.pageNumber].length > 0) {
          this.interestsAndHobbies[this.pageNumber + 1] = [];
        }
      break;
      case AppSettings.PORTFOLIO:
        if (this.portfolio[this.pageNumber] && this.portfolio[this.pageNumber].length > 0) {
          this.portfolio[this.pageNumber + 1] = [];
        }
      break;
      case AppSettings.CONTACTS:
        if (this.contacts[this.pageNumber] && this.contacts[this.pageNumber].length > 0) {
          this.contacts[this.pageNumber + 1] = [];
        }
      break;
      default:
      break;
    }
    this.ref.detectChanges();
  }
}
