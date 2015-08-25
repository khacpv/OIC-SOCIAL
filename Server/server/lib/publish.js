publish = function () {
    return MongoTasks.find({
        $or: [
            {private: {$ne: true}},
            {owner: this.userId}
        ]
    })
};