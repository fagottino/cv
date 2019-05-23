import { Component, Input } from '@angular/core';
import { Cms } from 'src/app/entities/cms';
import { KnowledgeComponent } from '../knowledge/knowledge.component';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css', '../../app.component.css']
})
export class CmsComponent extends KnowledgeComponent {

  @Input() cms: Cms[];

  constructor() {
    super();
  }

  ngOnInit() {
  }
  
  ngAfterViewChecked(): void {
    super.ngAfterViewChecked();
  }

}
