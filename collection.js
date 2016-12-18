/**
 * Created by sebastian on 16.12.16.
 */
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

Shouts = new Mongo.Collection('shouts');



Meteor.methods({
    'shouts.insert'(shout) {
        check(shout, String);


        Shouts.insert({
            shout: shout,
            createdAt: new Date()
        })
    },

});
