const handleResponse = async (response) => {
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
    }
    return response.json();
  };

  const baseUrl = "http://localhost:3000"
  
  export const getStatementsFromUser = async (user_id) => {
    try {
      const response = await fetch(`${baseUrl}/api/statements/${user_id}`);
      return handleResponse(response);
    } catch (error) {
      console.error("Error fetching all statements:", error);
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

  export const getStatementsFromUserInAMonth = async (user_id) => {
    try {
      const response = await fetch(`${baseUrl}/api/statements/${user_id}/month`);
      return handleResponse(response);
    } catch (error) {
      console.error(`Error fetching statement with ID ${user_id}:`, error);
      throw error;
    }
  };

  export const getStatementsFromUserAndTypeInAMonth = async (user_id, type) => {
    try {
      const response = await fetch(`${baseUrl}/api/statements/${user_id}/${type}/month`);
      return handleResponse(response);
    } catch (error) {
      console.error(`Error fetching statement with ID ${user_id}:`, error);
      throw error;
    }
  };
  
  export const addStatement = async (statementData) => {
    try {
      const response = await fetch(`${baseUrl}/api/statements`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(statementData),
      });
      return handleResponse(response);
    } catch (error) {
      console.error("Error creating a new statement:", error);
      throw error;
    }
  };
  
  export const updateStatement = async (user_id, statementData) => {
    try {
      const response = await fetch(`${baseUrl}/api/statement/${user_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(statementData),
      });
      return handleResponse(response);
    } catch (error) {
      console.error(`Error updating statement with ID ${user_id}:`, error);
      throw error;
    }
  };
  
  export const delecteStatement = async (user_id) => {
    try {
      const response = await fetch(`${baseUrl}/api/statement/${user_id}`, {
        method: "DELETE",
      });
      return handleResponse(response);
    } catch (error) {
      console.error(`Error deleting statement with ID ${user_id}:`, error);
      throw error;
    }
  };