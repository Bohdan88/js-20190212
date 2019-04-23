import { MessageCard } from "./blocks/message-card/message-card";
import { Search } from "./blocks/search/search";
import { MessageInfo } from "./blocks/message-info/message-info";
import { MessageContent } from "./blocks/message-content/message-content";

import { Message } from './views/message/message';
import { Router } from '../libs/router';
/* eslint-disable */
import _ from './messages.scss';

/* eslint-enable */

window.MessageCard = MessageCard;
window.Search = Search;
window.MessageInfo = MessageInfo;
window.MessageContent = MessageContent;

window.Message = Message;

window.addEventListener('DOMContentLoaded', () => {
  const cards = {cards : [
    {
      h5: 'Conference Team',
      text: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum',
      url: 'https://js.cx/carousel/1.png',
      message: {
        title: 'Lorem 1',
        emailFrom: 'burlakili@bk.ru',
        emailTo: 'burlakili@bk.ru',
        time: '10 янв 2019',
        text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat itaque vitae assumenda vel magni illum, ut illo perferendis velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo dignissimos? Quia ea similique debitis impedit odio minima architecto sunt.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat itaque vitae assumenda vel magni illum, ut illo perferendis velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo dignissimos? Quia ea similique debitis impedit odio minima architecto sunt.</p>'
      }
    },
    {
      h5: 'Slack',
      text: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum',
      url: '',
      id: 2,
      message: {
        title: 'Lorem 2',
        emailFrom: 'burlakili@bk.ru',
        emailTo: 'burlakili@bk.ru',
        time: '10 янв 2019',
        text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat itaque vitae assumenda vel magni illum, ut illo perferendis velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo dignissimos? Quia ea similique debitis impedit odio minima architecto sunt.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat itaque vitae assumenda vel magni illum, ut illo perferendis velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo dignissimos? Quia ea similique debitis impedit odio minima architecto sunt.</p>'
      }
    },
    {
      h5: 'Ivan Petrov',
      text: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum',
      url: 'https://js.cx/clipart/winnie-mult.jpg',
      id: 3,
      message: {
        title: 'Lorem 3',
        emailFrom: 'burlakili@bk.ru',
        emailTo: 'burlakili@bk.ru',
        time: '10 янв 2019',
        text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat itaque vitae assumenda vel magni illum, ut illo perferendis velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo dignissimos? Quia ea similique debitis impedit odio minima architecto sunt.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat itaque vitae assumenda vel magni illum, ut illo perferendis velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo dignissimos? Quia ea similique debitis impedit odio minima architecto sunt.</p>'
      }
    }]
  };
  const message = new Message(cards);
  const router = new Router();

  message.render(document.querySelector('.js-view-message'));
  // router.register('contacts', listView, true);
  // router.register('card', cardView);
  router.start();
});
