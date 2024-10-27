// server/models/Plan.js
import mongoose from 'mongoose';

const SuggestedBudgetSchema = new mongoose.Schema({
  essentialExpenses: {
    percentage: { 
        type: Number, 
        required: true 
    },
    amount: { 
        type: Number, 
        required: true 
    }
  },
  savingsForGoal: {
    percentage: { 
        type: Number, 
        required: true 
    },
    amount: { 
        type: Number, 
        required: true 
    }
  },
  discretionarySpending: {
    percentage: { 
        type: Number, 
        required: true 
    },
    amount: { 
        type: Number, 
        required: true 
    }
  }
}, { _id: false });

const GeneratedPlanSchema = new mongoose.Schema({
  monthlySavingsNeeded: { 
    type: Number, 
    required: true 
},
  suggestedBudget: { 
    type: SuggestedBudgetSchema, 
    required: true 
},
  advice: { 
    type: [String], 
    required: true 
},
  tailoredAdvice: { 
    type: [String], 
    required: true 
}
}, { _id: false });

const PlanSchema = new mongoose.Schema({
  user_id: { 
    type: String, 
    required: true 
},
  goal: { 
    type: String, 
    required: true 
},
  targetAmount: { 
    type: Number, 
    required: true 
},
  timeFrame: { 
    type: Number, 
    required: true 
}, // in months
  income: { 
    type: Number, 
    required: true 
},
  currentSavings: { 
    type: Number, 
    required: true },
  generatedPlan: { 
    type: GeneratedPlanSchema, 
    required: true },
  dateCreated: { 
    type: Date, 
    default: Date.now }
});

const Plan = mongoose.model('Plan', PlanSchema);

export default Plan;
