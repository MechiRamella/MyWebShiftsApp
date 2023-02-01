const mongoose = require('mongoose')

const BranchSchema = new mongoose.Schema({
    name: {
        type: String
    },
    capMax: {
        type: Number
    },
    idBranch: {
        type: Number
    },
    shifts: {
        type: Array
    },
    idOperator: {
        type: Array
    },
    beginTime: {
        type: String
    },
    closeTime: {
        type: String
    },
    email: {
        type: String
    }

})

module.exports = mongoose.model("Branch", BranchSchema)