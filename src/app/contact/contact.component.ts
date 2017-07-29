import { Component, OnInit } from '@angular/core';
import { fadeInAnimation, slideInOutAnimation, slideLeftAnimation } from '../_animations/index';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]':'' }
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
