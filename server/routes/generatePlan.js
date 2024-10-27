import OpenAI from 'openai';

const systemPrompt = `You are a financial planning assistant. Your task is to create a financial plan based on the user's input. 
You must return ONLY a JSON object with exactly this structure:
{
  "monthlySavingsNeeded": <number>,
  "suggestedBudget": {
    "essentialExpenses": {
      "percentage": <number>,
      "amount": <number>
    },
    "savingsForGoal": {
      "percentage": <number>,
      "amount": <number>
    },
    "discretionarySpending": {
      "percentage": <number>,
      "amount": <number>
    }
  },
  "advice": [<string>, <string>, <string>],
  "tailoredAdvice": [<string>, <string>, <string>]
}

Rules:
1. All numbers should be actual numbers, not strings
2. Percentages should add up to 100
3. Include exactly 3 pieces of advice in each array
4. monthlySavingsNeeded should be calculated as (targetAmount - currentSavings) / timeFrame`;

export async function handleAIResponse(req, res) {
  if (!process.env.OPENAI_API) {
    throw new Error('OpenAI API key is not configured');
  }

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API
    });

    const data = await req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: JSON.stringify(data)
        }
      ],
      temperature: 0.1,
      max_tokens: 500,
      response_format: { type: "json_object" }
    });

    const generatedPlan = JSON.parse(completion.choices[0].message.content);

    // Validate the structure of the generated plan
    if (!generatedPlan.monthlySavingsNeeded) {
      console.error('Missing monthlySavingsNeeded in plan:', generatedPlan);
      throw new Error('Generated plan missing monthlySavingsNeeded');
    }
    if (!generatedPlan.suggestedBudget) {
      console.error('Missing suggestedBudget in plan:', generatedPlan);
      throw new Error('Generated plan missing suggestedBudget');
    }
    if (!Array.isArray(generatedPlan.advice) || !Array.isArray(generatedPlan.tailoredAdvice)) {
      console.error('Missing or invalid advice arrays in plan:', generatedPlan);
      throw new Error('Generated plan missing advice arrays');
    }

    return generatedPlan;

  } catch (error) {
    console.error('AI Service Error:', error);
    throw error;
  }
}