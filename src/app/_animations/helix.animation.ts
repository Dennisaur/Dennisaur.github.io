// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style, query, stagger, animateChild } from '@angular/animations';

export const helixAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('helixAnimation', [
      transition('* => *', [
        query('.grid-item', [
          style({
            transform: 'rotateY(-180deg)'
          }),
          stagger(100, [
            animate(400, style({transform: 'rotateY(0deg)'}))
          ])
        ], { optional: true})
      ])
    ]);
