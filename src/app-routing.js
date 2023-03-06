import { createBrowserRouter } from "react-router-dom";
import NavbarComponent from "./routes/shared/NavbarComponent"
import HomepageComponent from "./routes/homepage/HomepageComponent"
import AuthFormComponent from "./routes/authentication/AuthFormComponent";
import ImcFormComponent from "./routes/imcForm/ImcFormComponent";
import ImcDisplayComponent from "./routes/imcDisplay/ImcDisplayComponent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarComponent/>,
        children: [
            {
                path: "/",
                element: <HomepageComponent/>
            },
            {
                path: "/authentication",
                element: <AuthFormComponent/>
            },
            {
                path: "/imcForm",
                element: <ImcFormComponent/>,
            },
            {
                path: "/imcDisplay",
                element: <ImcDisplayComponent/>,
            }
        ]
    }
])

export default router