import { AuthProvider } from "@propelauth/react";

const BudgetPage = () => {
    return (
        <AuthProvider authUrl={process.env.REACT_APP_AUTH_URL}>
            <div>
                <h1>BudgetPage</h1>
            </div>
        </AuthProvider>
    )
}

export default BudgetPage;