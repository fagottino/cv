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
  knowledges: Knowledges[][] = [];
  cms: Cms[][] = [];
  languages: Languages[][] = [];
  skillsAndCompetences: SkillsAndCompetences[][] = [];
  interestsAndHobbies: InterestsAndHobbies[][] = [];
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
    this.cv.knowledges.forEach(k => {
      !this.knowledges[this.pageNumber] ? this.knowledges[this.pageNumber] = [] : null;
      this.knowledges[this.pageNumber].push(k)
      this.ref.detectChanges();
    });
  }

  setCms(): void {
    this.activeSection = AppSettings.CMS;
    this.cv.cms.forEach(c => {
      !this.cms[this.pageNumber] ? this.cms[this.pageNumber] = [] : null;
      this.cms[this.pageNumber].push(c);
      this.ref.detectChanges();
    });
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
    this.cv.interestsAndHobbies.forEach(i => {
      !this.interestsAndHobbies[this.pageNumber] ? this.interestsAndHobbies[this.pageNumber] = [] : null;
      this.interestsAndHobbies[this.pageNumber].push(i);
      this.ref.detectChanges();
    });
  }

  doNewPage(): void {
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
          this.educations[this.pageNumber + 1].push(this.educations[this.pageNumber].pop());
        }
      break;
      case AppSettings.KNOWLEDGES:
        if (this.knowledges[this.pageNumber] && this.knowledges[this.pageNumber].length > 0) {
          this.knowledges[this.pageNumber + 1] = [];
          this.knowledges[this.pageNumber + 1].push(this.knowledges[this.pageNumber].pop());
        }
      break;
      case AppSettings.INTERESTSandHOBBIES:
        if (this.interestsAndHobbies[this.pageNumber] && this.interestsAndHobbies[this.pageNumber].length > 0) {
          this.interestsAndHobbies[this.pageNumber + 1] = [];
          this.interestsAndHobbies[this.pageNumber + 1].push(this.interestsAndHobbies[this.pageNumber].pop());
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
}
