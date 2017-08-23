// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [
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
      ])
    ]);
