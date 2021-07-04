import Model, { attr } from '@ember-data/model';

export default class MessageModel extends Model {
  @attr text;
}
