import Ember from 'ember';

export default Ember.Component.extend({
  setup: function () {
    io.socket.get('/api/v1/activities');
    io.socket.on('connect', () => {
      Ember.Logger.debug('activities component is listening for socket.io events.');
    });
    io.socket.on('activity', (message) => {
      // {{debugger}}
      if(message.verb === 'created') {
        this.store.find('activity', message.id);
      }
    });
  }.on('init')
});
