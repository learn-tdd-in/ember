import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NewMessageFormComponent extends Component {
  @tracked message = '';

  @action
  handleSend(e) {
    e.preventDefault();
    this.message = '';
  }
}
