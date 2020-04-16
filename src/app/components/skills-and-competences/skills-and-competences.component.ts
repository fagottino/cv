import { Component, OnInit, Input, AfterViewChecked, Output, EventEmitter } from '@angular/core';
import { SkillsAndCompetences } from 'src/app/entities/skills-and-competences';
import { AppSettings } from 'src/assets/app-settings';

@Component({
  selector: 'app-skills-and-competences',
  templateUrl: './skills-and-competences.component.html',
  styleUrls: ['./skills-and-competences.component.css', '../../app.component.css']
})
export class SkillsAndCompetencesComponent implements OnInit, AfterViewChecked {

  @Input() skillsAndCompetence: SkillsAndCompetences;
  @Input() pageNumber: number;
  @Output() newPage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    if (document.getElementById('con' + this.pageNumber)) {
      if (document.getElementById('con' + this.pageNumber).clientHeight + 200 > AppSettings.DIV_HEIGTH) {
        this.newPage.emit();
      }
    }
  }

}
