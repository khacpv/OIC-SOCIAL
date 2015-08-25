Meteor.methods(methods);
Meteor.publish("tasks", publish);

Meteor.startup(function () {
    console.log("server starting ...");
});
