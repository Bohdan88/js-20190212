import { View } from '../view';
import template from './mail.pug';
import { MessageInfo } from '../../blocks/message-info/message-info';
import { MessageContent } from '../../blocks/message-content/message-content';
import { Search } from '../../blocks/search/search';
import { MessageCard } from '../../blocks/message-card/message-card'

/* eslint-disable */
import _ from './mail.scss';

/* eslint-enable */

export class Mail extends View {
  get bemName () {
    return 'mail';
  }
  template (data) {
    return template(data);
  }
  update (number) {
    const card = this.HTMLcards[number];
    this.messageInfo.update(card.options.message);
    this.messageContent.update(card.options.message, this.messageInfo.content);
  }
  constructor (options) {
    super(options);
    this.HTMLcards = [];
    this.activeCard = options.cards[0];
    this.messageInfo = new MessageInfo({
      title: this.activeCard.message.title || '',
      emailFrom: this.activeCard.message.emailFrom || '',
      emailTo: this.activeCard.message.emailTo || '',
      time: this.activeCard.message.time || ''
    });
    this.messageContent = new MessageContent({
      text: this.activeCard.message.text || ''
    });
    this.search = new Search(options);
    if (options.cards) {
      options.cards.forEach(item => {
        this.HTMLcards.push(new MessageCard(item));
      });
    }
  }
  render (el) {
    super.render(el);
    this.el.hidden = false;
    this.messageInfo.render(this.getElement('wrapper'));
    this.messageContent.render(this.messageInfo.content);
    this.search.render(this.getElement('search'));
    const renderElemets = Array.from(el.querySelectorAll(`.${this.bemName}__cards`));
    this.HTMLcards.forEach((item, i) => {
      item.render(renderElemets[i]);
    });
  }
}
