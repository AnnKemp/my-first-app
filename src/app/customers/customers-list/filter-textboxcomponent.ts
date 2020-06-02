import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-textbox',
  template: `
    Filter: <input type="text" [value]="filter" (input)="filter=$event.target.value" />
    `
  // on the value you put the filter to put it in action, then you call (input) and $event is the current event taking place so in this case the typing then you take the target and therefrom the value
})
export class FilterTextboxComponent implements OnInit {
  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter); //Raise changed event also every time it changes
  }
// emitters are there to pass data to the parent
  // <string> is typescript just giving a type to it, it has to be a string
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}


  ngOnInit() {

  }

}
