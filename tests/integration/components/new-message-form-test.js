import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | new-message-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it clears the message', async function (assert) {
    const message = 'Hello World';

    await render(hbs`<NewMessageForm />`);

    await fillIn('[data-test-message-text]', message);
    await click('[data-test-send-message-button]');

    assert.dom('[data-test-message-text]').hasValue('');
  });
});
