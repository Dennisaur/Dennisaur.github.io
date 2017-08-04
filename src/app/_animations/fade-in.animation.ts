// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [
      state('void', style({
        display: 'none'
      })),
      state('active', style({
        display: 'block'
      })),
      state('inactive', style({
        display: 'none'
      })),
      transition('inactive => active', [
        style({
          transform: 'scale(0)'
        }),
        animate('0.5s ease-in', style({
          transform: 'scale(1)'
        }))
      ]),
      transition('active => inactive', [
        style({
          transform: 'scale(1)'
        }),
        animate('0.5s ease-in', style({
          transform: 'scale(0)'
        }))
      ]),
      // transition(':enter', [
      //   style({
      //     opacity: 0
      //   }),
      //   animate('1s ease-in')
      // ]),
      // transition(':leave', [
      //   animate('1s ease-out', style({
      //     opacity: 0.5,
      //     transform: 'scale(0)'
      //   }))
      // ])
    ]);
