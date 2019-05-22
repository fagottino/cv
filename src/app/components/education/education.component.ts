import { Component, OnInit, AfterViewChecked, Input, Output, EventEmitter } from '@angular/core';
import { Educations } from 'src/app/entities/educations';
import { AppSettings } from '../../../assets/app-settings'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css', '../../app.component.css']
})
export class EducationComponent implements OnInit, AfterViewChecked {
  
  @Input() education: Educations;
  @Input() pageNumber: number;
  @Output() newPage = new EventEmitter<string>();
  @Output() activePage = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() { }
  
  ngAfterViewChecked(): void {
    if (document.getElementById('con' + this.pageNumber)) {
      console.log('Education ' + this.pageNumber + ' ' + document.getElementById('con' + this.pageNumber).clientHeight);
      if (document.getElementById('con' + this.pageNumber).clientHeight > AppSettings.DIV_HEIGTH) {
        this.newPage.emit("education");
      }
    }
  }
}
