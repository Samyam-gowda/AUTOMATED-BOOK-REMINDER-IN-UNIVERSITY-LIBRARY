const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    uname: {
        type: String,
        required: true,
    },
    usn: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: false,
    },
    issue: {
        type: Date,
        required: false,
    },
    return: {
        type: Date,
        required: false,
    },
});


const Form = mongoose.model('Form', formSchema);


module.exports = Form;