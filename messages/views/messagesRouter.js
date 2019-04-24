import { Router } from '../../libs/router';

export class MessagesRouter extends Router {
  onRoute (rout) {
    this.routes[rout] ? this.routes[rout].update((rout.replace('message', '')) - 1) : this.routes['message1'].update(0);
  }
}