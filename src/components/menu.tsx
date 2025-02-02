import { Link, Outlet } from "react-router-dom";
import Login from "./Home";
import ShowUser from "./showUser";
import Home from "./Home";
export default function Menu() {
    return (
        <>
        <Home/>
        <div></div>
        <nav style={{ position: "fixed", top: "5px", right: "50px" }}>
            <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
            <Link to="/first" style={{ marginRight: "10px" }}>First</Link>
            <Link to="/second" style={{ marginRight: "10px" }}>Second</Link>
        </nav>
        <Outlet/>
        {/* <div style={{ height: "100px" }}></div>
        <ShowUser /> */}
        </>
    );
}