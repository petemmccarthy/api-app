import Ember from 'ember';

export default Ember.Route.extend({
  
  actions: {
    showCustomers () {
      this.transitionTo('home.customers');
    },
    showPremises () {
      this.transitionTo('home.premises');
    }
  }
});
