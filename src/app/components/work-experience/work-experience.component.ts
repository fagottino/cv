import { Component, OnInit, Input, AfterViewChecked, Output, EventEmitter } from '@angular/core';
import { WorkExperiences } from 'src/app/entities/work-experiences';
import { AppSettings } from '../../../assets/app-settings'

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css', '../../app.component.css']
})
export class WorkExperienceComponent implements OnInit, AfterViewChecked {

  @Input() workExperience: WorkExperiences;
  @Input() pageNumber: number;
  @Output() newPage = new EventEmitter();

  constructor() { }

  ngOnInit() { }
  
  ngAfterViewChecked(): void {
    if (document.getElementById('con' + this.pageNumber)) {
      if (document.getElementById('con' + this.pageNumber).clientHeight > AppSettings.DIV_HEIGTH) {
        this.newPage.emit();
      }
    }
  }
}
