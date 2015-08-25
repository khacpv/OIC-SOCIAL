methods.setPrivate = function (taskId, setToPrivate) {
    var task = MongoTasks.findOne(taskId);

    // Make sure only the task owner can make a task private
    if (task.owner !== Meteor.userId()) {
        throw new Meteor.Error("not-authorized");
    }

    MongoTasks.update(taskId, {$set: {private: setToPrivate}});
};