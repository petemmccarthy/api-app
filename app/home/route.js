import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    showCustomers () {
      this.transitionTo('customers');
    },
    showPremises () {
      this.transitionTo('customers');
    }
  }
});
