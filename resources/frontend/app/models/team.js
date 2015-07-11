import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  name:         attr('string'),
  logoPath:     attr('string'),
  tournamentId: attr('number')

  //tournamentId: belongsTo('tournament')
});
