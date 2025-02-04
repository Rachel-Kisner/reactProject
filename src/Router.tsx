import AddRecipe from "./components/AddRecipe";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";
import { createBrowserRouter } from "react-router-dom";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        children:[
            {
                path:"/recipes",
                element:<RecipeList/>
            },
            {
                path:"/add",
                element:<AddRecipe/>
            }
        ]
    },
])
export default router