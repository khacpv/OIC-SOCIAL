methods.setChecked = function (taskId, setChecked) {
    var task = MongoTasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
        // If the task is private, make sure only the owner can check it off
        throw new Meteor.Error("not-authorized");
    }
    MongoTasks.update(taskId, {$set: {checked: setChecked}});
};
