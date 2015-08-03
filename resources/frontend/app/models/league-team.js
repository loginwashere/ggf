import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  name:     attr('string'),
  logoPath: attr('string'),
  leagueId: attr('number'),
});
