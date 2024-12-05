const mongoose = require("mongoose");

async function HandleConnection(url){
    return await mongoose.connect(url);
}

module.exports = {
    HandleConnection,
}