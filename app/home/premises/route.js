import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['premise1', 'premise2', 'premise3', 'premise4'];
  }
});
