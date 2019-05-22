import { Component, OnInit, AfterViewChecked, Input, Output, EventEmitter } from '@angular/core';
import { Knowledges } from 'src/app/entities/knowledges';
import { AppSettings } from 'src/assets/app-settings';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css', '../../app.component.css']
})
export class KnowledgeComponent implements OnInit, AfterViewChecked {

  @Input() knowledges: Knowledges;
  @Input() pageNumber: number;
  @Output() newPage = new EventEmitter();
  rows: number[] = [1];

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
