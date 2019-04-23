import { Router } from '../../libs/router';

export class MessagesRouter extends Router {
  onRoute (route, blocks, card) {
    blocks.forEach(el => {
      el.update(card);
    });
  }
}