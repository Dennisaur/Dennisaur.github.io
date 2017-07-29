import { Component, OnInit } from '@angular/core';
import { fadeInAnimation, slideInOutAnimation, slideLeftAnimation } from '../_animations/index';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]':'' }
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
