import { MessageCard } from './blocks/message-card/message-card';
import { Search } from './blocks/search/search';
import { MessageInfo } from './blocks/message-info/message-info';
import { MessageContent } from './blocks/message-content/message-content';

import { Mail } from './views/mail/mail';
import { MessagesRouter } from './views/messagesRouter';
/* eslint-disable */
import _ from './messages.scss';

/* eslint-enable */

window.MessageCard = MessageCard;
window.Search = Search;
window.MessageInfo = MessageInfo;
window.MessageContent = MessageContent;

window.Mail = Mail;

window.addEventListener('DOMContentLoaded', () => {
  const cards = { cards: [
    {
      h5: 'Conference Team',
      text: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum',
      url: 'https://js.cx/carousel/1.png',
      id: 1,
      message: {
        title: 'Lorem 1',
        emailFrom: 'burlakili@bk.ru',
        emailTo: 'burlakili@bk.ru',
        time: '10 янв 2019',
        text: '<p>Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat itaque vitae assumenda vel magni illum, ut illo perferendis velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo dignissimos? Quia ea similique debitis impedit odio minima architecto sunt.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat itaque vitae assumenda vel magni illum, ut illo perferendis velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo dignissimos? Quia ea similique debitis impedit odio minima architecto sunt.</p>'
      }
    },
    {
      h5: 'Slack',
      text: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum',
      url: '',
      id: 2,
      message: {
        title: 'Lorem 2',
        emailFrom: 'test@bk.com',
        emailTo: 'test@bk.com',
        time: '21 янв 2019',
        text: '<p>Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat itaque vitae assumenda vel magni illum, ut illo perferendis velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo dignissimos? Quia ea similique debitis impedit odio minima architecto sunt.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat itaque vitae assumenda vel magni illum, ut illo perferendis velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo dignissimos? Quia ea similique debitis impedit odio minima architecto sunt.</p>'
      }
    },
    {
      h5: 'Ivan Petrov',
      text: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum',
      url: 'https://js.cx/clipart/winnie-mult.jpg',
      id: 3,
      message: {
        title: 'Lorem 3',
        emailFrom: 'bag@bk.buz',
        emailTo: 'bag@bk.buz',
        time: '10 янв 2018',
        text: '<p>Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat itaque vitae assumenda vel magni illum, ut illo perferendis velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo dignissimos? Quia ea similique debitis impedit odio minima architecto sunt.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat itaque vitae assumenda vel magni illum, ut illo perferendis velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo dignissimos? Quia ea similique debitis impedit odio minima architecto sunt.</p>'
      }
    }]
  };
  const message = new Mail(cards);
  const router = new MessagesRouter();

  message.render(document.querySelector('.js-view-message'));
  router.register('message1', message, true);
  router.register('message2', message);
  router.register('message3', message);
  router.start();
});
