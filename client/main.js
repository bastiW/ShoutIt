import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.shoutit.helpers({
    shouts() {
        return Shouts.find({}, { sort: { createdAt: -1 }});
    },
});
Template.shoutit.events({
    'submit .shout-it'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const shout = target.shout.value;

        Meteor.call('shouts.insert', shout);

        // Clear form
        target.shout.value = '';
    },
});