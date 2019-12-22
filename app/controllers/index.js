import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @action
  handleSend(text) {
    const message = this.store.createRecord('message', { text });
    message.save();
  }
}
