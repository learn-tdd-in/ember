import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NewMessageFormComponent extends Component {
  @tracked message = '';

  @action
  handleSend(e) {
    e.preventDefault();
    if(this.args.onSend) {
      this.args.onSend(this.message);
    }
    this.message = '';
  }
}
