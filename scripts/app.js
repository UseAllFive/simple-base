import 'babel-polyfill';
import { TweenMax } from 'gsap';

class App {

  constructor() {
    TweenMax.to('.test', 0.5, {
      color: 'red'
    });
  }
}

new App();
