import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | sending a message', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /sending-a-message', async function(assert) {
    await visit('/sending-a-message');

    assert.equal(currentURL(), '/sending-a-message');
  });
});
