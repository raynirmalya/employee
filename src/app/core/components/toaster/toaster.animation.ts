import {
  transition,
  state,
  trigger,
  animate,
  style
} from '@angular/animations';

export class Animations {
  public static toasterAnime = trigger('rowEaseInOut', [
    state(
      'in',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateY(-100px)'
      }),
      animate(300)
    ]),
    transition('* => void', [
      animate(
        300,
        style({
          opacity: 0,
          transform: 'translateY(-100px)'
        })
      )
    ])
  ]);
}
