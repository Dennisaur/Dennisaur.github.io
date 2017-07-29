import { Component } from '@angular/core';
import { fadeInAnimation, slideInOutAnimation, slideLeftAnimation } from './_animations/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // animations: [fadeInAnimation],
  // host: {'[@fadeInAnimation]':''}
})
export class AppComponent {
  title = 'app';
  tests = ["one", "two"];

  activeSection = Section.HOME;
  sectionEnum = Section;

  SetActiveSection(section) {
    this.activeSection = section;
  }
}

enum Section {
  HOME,
  PORTFOLIO,
  ABOUT,
  CONTACT
}
