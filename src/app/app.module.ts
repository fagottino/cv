import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { CmsComponent } from './components/cms/cms.component';
import { LanguageComponent } from './components/language/language.component';
import { SkillsAndCompetencesComponent } from './components/skills-and-competences/skills-and-competences.component';
import { InterestsAndHobbiesComponent } from './components/interests-and-hobbies/interests-and-hobbies.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { CheckArrayLengthPipe } from './pipe/check-array-length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    EducationComponent,
    KnowledgeComponent,
    CmsComponent,
    LanguageComponent,
    SkillsAndCompetencesComponent,
    InterestsAndHobbiesComponent,
    PortfolioComponent,
    ContactComponent,
    CheckArrayLengthPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
