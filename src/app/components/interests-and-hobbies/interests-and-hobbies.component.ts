import { Component, OnInit, AfterViewChecked, Input, Output, EventEmitter } from '@angular/core';
import { InterestsAndHobbies } from 'src/app/entities/interests-and-hobbies';
import { AppSettings } from 'src/assets/app-settings';

@Component({
  selector: 'app-interests-and-hobbies',
  templateUrl: './interests-and-hobbies.component.html',
  styleUrls: ['./interests-and-hobbies.component.css', '../../app.component.css']
})
export class InterestsAndHobbiesComponent implements OnInit, AfterViewChecked {

  @Input() interestsAndHobbies: InterestsAndHobbies;
  @Input() pageNumber: number;
  @Output() newPage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    if (document.getElementById('con' + this.pageNumber)) {
      if (document.getElementById('con' + this.pageNumber).clientHeight > AppSettings.DIV_HEIGTH) {
        this.newPage.emit();
      }
    }
  }

}
