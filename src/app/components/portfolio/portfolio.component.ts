import { Component, OnInit, Input, AfterViewChecked, Output, EventEmitter } from '@angular/core';
import { Portfolio } from 'src/app/entities/portfolio';
import { AppSettings } from 'src/assets/app-settings';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css', '../../app.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewChecked {

  @Input() portfolios: Portfolio[];
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
