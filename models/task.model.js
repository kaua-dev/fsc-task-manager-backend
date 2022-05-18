const { Schema, model } = require("mongoose");

const TaskSchema = Schema({
    description: {
        type: String,
        required: true,
    },
    isCcompleted: {
        type: Boolean,
        default: false,
    },
});

const TaskModel = model("Task", TaskSchema);

module.exports = model("Task", TaskSchema);
