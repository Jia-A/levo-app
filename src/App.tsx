import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/HomePage.tsx";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

export default App