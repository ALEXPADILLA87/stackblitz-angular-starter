import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css'],
})
export class ConceptsComponent {
  constructor() {}
  setArray = new Set<number>();
  displaySet: string = '';
  array = [1, 2, 5];
  array2 = [5, 6, 7];

  set() {
    this.setArray = new Set(this.array.concat(this.array2));
    this.displaySet = Array.from(this.setArray).join(',');
  }
}
