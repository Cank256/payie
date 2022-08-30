import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
    transactionId: {type: String, required: true},
    transactionType: {type: String, required: true},
    sender_account_id: {type: String, required: true},
    recipient_account_id: {type: String, required: true},
    amount: {type: Number, required: true},
    currency: {type: String, required: true},
    transaction_note:  String,
    createdAt: { type: Date, default: new Date()}
})

const Transaction = mongoose.model('Transactions', transactionSchema)

export default Transaction