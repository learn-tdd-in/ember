import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | new-message-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it clears the message', async function(assert) {
    const message = 'Hello World';

    await render(hbs`<NewMessageForm />`);

    await fillIn('[data-test-message-text]', message);
    await click('[data-test-send-message-button]');

    assert.dom('[data-test-message-text]').hasValue('');
  });

  test('it calls the onSend argument with the message', async function(assert) {
    const message = 'Hello World';

    const handleSend = sinon.spy();
    this.set('handleSend', handleSend);

    await render(hbs`<NewMessageForm @onSend={{handleSend}} />`);

    await fillIn('[data-test-message-text]', message);
    await click('[data-test-send-message-button]');

    assert.ok(handleSend.calledWith(message));
  });
});
