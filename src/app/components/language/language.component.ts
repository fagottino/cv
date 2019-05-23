import { Component, Input } from '@angular/core';
import { KnowledgeComponent } from '../knowledge/knowledge.component';
import { Languages } from 'src/app/entities/languages';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css', '../../app.component.css']
})
export class LanguageComponent extends KnowledgeComponent {

  @Input() languages: Languages[];

  constructor() {
    super();
   }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    super.ngAfterViewChecked();
  }

}
