import First from "./components/first";
import Menu from "./components/menu";
import Second from "./components/second";
import { createBrowserRouter } from "react-router-dom";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Menu/>,
        children:[
            {
                path:"/first",
                element:<First/>
            },
            {
                path:"/second",
                element:<Second/>
            }
        ]
    },
])
export default router