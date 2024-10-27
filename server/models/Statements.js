import mongoose from "mongoose";

const StatementsSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: { // Food, Gas, Electricity, Rent, etc. - Expense | Income - Income
        type: String,
        required: true
    },
    type: { // Expense or Income or Savings
        type: String,
        required: true
    },
    amount: { // 
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const statements = mongoose.model('statements', StatementsSchema);

export default statements;