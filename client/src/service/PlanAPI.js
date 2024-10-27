const handleResponse = async (response) => {
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
    }
    return response.json();
  };

  const baseUrl = "http://localhost:3000"
  
  export const getPlanFromUser = async (user_id) => {
    try {
      const response = await fetch(`${baseUrl}/api/plan/${user_id}`);
      return handleResponse(response);
    } catch (error) {
      console.error("Error fetching plan:", error);
      throw error;
    }
  };
  
  export const getStatementsFromUserAndType = async (user_id, type) => {
    try {
      const response = await fetch(`${baseUrl}/api/statements/${user_id}/${type}`);
      return handleResponse(response);
    } catch (error) {
      console.error(`Error fetching statement with ID ${user_id}:`, error);
      throw error;
    }
  };
  
  export const addPlan = async (planData) => {
    try {
      const response = await fetch(`${baseUrl}/api/plan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(planData),
      });
      return handleResponse(response);
    } catch (error) {
      console.error("Error creating a new plan:", error);
      throw error;
    }
  };
  
  export const updatePlan = async (id, planData) => {
    try {
      const response = await fetch(`${baseUrl}/api/plan/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(planData),
      });
      return handleResponse(response);
    } catch (error) {
      console.error(`Error updating plan with ID ${id}:`, error);
      throw error;
    }
  };
  
  export const deletePlan = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/api/plan/${id}`, {
        method: "DELETE",
      });
      return handleResponse(response);
    } catch (error) {
      console.error(`Error deleting plan with ID ${id}:`, error);
      throw error;
    }
  };