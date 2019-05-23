import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { Contacts } from 'src/app/entities/contacts';
import { AppSettings } from 'src/assets/app-settings';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../../app.component.css', '../../css/customStyle.css']
})
export class ContactComponent implements OnInit, AfterViewChecked {
  
  @Input() contacts: Contacts[];
  @Input() pageNumber: number;
  @Input() nameSurname: string;
  @Output() newPage = new EventEmitter<string>();

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
