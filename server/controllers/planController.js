import plan from '../models/Plan.js'; // this is your MongoDB model 

const getPlanFromUser = async (req, res) => {
    try {
        const userPlan = await plan.find({ user_id: req.params.user_id });
        return res.status(200).json(userPlan);
    } catch (error) {   
        return res.status(500).json(error.message);
    }  
}

const addPlan = async (req, res) => {
    try {
        const newPlan = await plan.create({
            user_id: req.body.user_id,
            goal: req.body.goal,
            targetAmount: req.body.targetAmount,
            timeFrame: req.body.timeFrame,
            income: req.body.income,
            currentSavings: req.body.currentSavings,
            generatedPlan: req.body.generatedPlan,
            dateCreated: req.body.dateCreated,
        });
        return res.status(200).json(newPlan);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const updatePlan = async (req, res) => {
    try {
        const updatedPlan = await plan.findByIdAndUpdate(
            {_id: req.params.id}, 
            {
                goal: req.body.goal,
                targetAmount: req.body.targetAmount,
                timeFrame: req.body.timeFrame,
                income: req.body.income,
                currentSavings: req.body.currentSavings,
                generatedPlan: req.body.generatedPlan
            }, 
            { new: true }
        );
        return res.status(200).json(updatedPlan);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const deletePlan = async (req, res) => {
    try {
        const deletedPlan = await plan.findByIdAndDelete(req.params.id);
        return res.status(200).json(deletedPlan);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export default { getPlanFromUser, addPlan, updatePlan, deletePlan };