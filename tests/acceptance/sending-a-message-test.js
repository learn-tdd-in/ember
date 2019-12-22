import { module, test } from 'qunit';
import { visit, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | sending a message', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('it shows the message in the list', async function(assert) {
    const message = 'Hello World';
    await visit('/');

    await fillIn('[data-test-message-text]', message);
    await click('[data-test-send-message-button]');

    assert.dom('[data-test-message-text]').hasValue('');
    assert.dom('[data-test-message-list]').hasText(message);
  });
});
