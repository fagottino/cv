import { Directive, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '[appOnCreate]'
})
export class OnCreateDirective implements OnInit {

  @Output() create: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.create.emit('newElement');
  }

}
