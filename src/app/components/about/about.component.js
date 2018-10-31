import './about.component.scss';
import template from './about.component.html';

class AboutCtrl {
  constructor() {
    this.title = 'About Component';
  }
}

let aboutComponent = {
    template: template,
    controller: AboutCtrl
};

export {aboutComponent};
