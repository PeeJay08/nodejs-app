import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BudgetPlanner from "./pages/BudgetPlanner";
import UserController from "./controller/UserController";
import { AuthProvider } from "./model/providers/authprovider";
import AuthGuard from "./components/AuthGuard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <UserController/>,
  },
  {
    path: "/budgetplanner/:userId",
    element: <AuthGuard><BudgetPlanner /></AuthGuard>,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App;
