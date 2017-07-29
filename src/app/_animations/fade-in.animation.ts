// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('1s ease-in')
      ]),
      transition(':leave', [
        animate('1s ease-out', style({
          opacity: 0.5,
          transform: 'scale(0)'
        }))
      ])
    ]);
