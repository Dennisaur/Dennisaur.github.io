// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style, stagger, query } from '@angular/animations';

export const slideLeftAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('slideLeftAnimation', [
    transition('* => *', [
      query(':leave .project', [
        stagger(100, [
          animate(400, style({transform: 'translateX(150%)'}))
        ])
      ], { optional: true}),
      query(':enter', [
        style({
          transform: 'translateX(150%)'
        }),
        stagger(100, [
          animate(400, style({transform: 'translateX(0%)'}))
        ])
      ], { optional: true})
    ])
  ]);
