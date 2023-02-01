const mongoose = require('mongoose')

const ShiftSchema = new mongoose.Schema({
    idShift: {
        type: Number
    },
    idBranch: {
        type: Number
    },
    idUser: {
        type: Number
    },
    dateBooking: {
        type: Date
    },
    dateShift: {
        type: Date
    },
    statusHour: {
        type: String
    },
    statusShift: {
        type: String
    }

})

module.exports = mongoose.model("Shifts", ShiftSchema)