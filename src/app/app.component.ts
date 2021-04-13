import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digitalSchool';
  navigations = [];
  constructor() {
    this.navigations = [
      { title: 'Section', link: '/section' },
      { title: 'Class', link: '/class' },

    ];
  }
}
