import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PageComponent } from './components/page/page.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { CmsComponent } from './components/cms/cms.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    WorkExperienceComponent,
    EducationComponent,
    KnowledgeComponent,
    CmsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
