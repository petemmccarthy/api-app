import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return ['cust1', 'cust2', 'cust3', 'cust4'];
  }
});
