import { Block } from '../../../blocks/block';
import template from './message-content.pug';
/* eslint-disable */
import _ from './message-content.scss';

/* eslint-enable */

export class MessageContent extends Block {
  get bemName () {
    return 'letter';
  }
  template (data) {
    return template(data);
  }
  update (data, el) {
    this.options = data;
    this.render(el);
  }
}
