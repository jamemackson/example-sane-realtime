import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('activity', {sort: 'createdAt desc'});
  },
  actions: {
    createActivity: function() {
      var performedBy = Ember.$('#activity-performed-by').val(),
          description = Ember.$('#activity-description').val();

      var activity = this.store.createRecord('activity', {
        'performedBy': performedBy,
        'description': description
      });
      return activity.save().then(
          function(activity) {           // success callback
            //clear the input fields
            Ember.$('#activity-performed-by').val('');
            Ember.$('#activity-description').val('');
          },
          function(reason) {          // failure callback
            //log the failure reason
            console.log('error creating activity: ' + reason);
            alert('error creating activity: ' + reason);
          }
        );
    }
  }
});
