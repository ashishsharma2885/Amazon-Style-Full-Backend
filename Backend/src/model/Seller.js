const mongoose = require('mongoose');

const sellerChema = new mongoose.Schema({
    sellerName: {
        type: String,
        required: true
    },
    moible: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    businessDetails: {
        type: String,
        required: true
    },
    businessEmail: {
        tupe: String,
    },
    businessMoible: {
        type: String,
    },
    businessAddress: {
        type: String,
    },
   bankDetails: {
    accountNumber: {
    type: String,
    },
    accountHolderName: {
        type: String,
    },
    bankName: {
        type: String,
    },
    ifscCode: {
        type: String,
    }
   },
   picupAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address"
   },
   GSTIN: {
    type: String,
    required: false,
   },
   role: {
    type: String,
   }

})