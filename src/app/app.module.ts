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

@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    EducationComponent,
    KnowledgeComponent,
    CmsComponent,
    LanguageComponent,
    SkillsAndCompetencesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
