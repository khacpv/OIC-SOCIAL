
methods.deleteTask = function (taskId) {
    var task = MongoTasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
        // If the task is private, make sure only the owner can delete it
        throw new Meteor.Error("not-authorized");
    }
    MongoTasks.remove(taskId);
};
