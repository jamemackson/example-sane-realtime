import DS from 'ember-data';

export default DS.Model.extend({
  performedBy: DS.attr('string'),
  description: DS.attr('string')
});
