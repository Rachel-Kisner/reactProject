import { Link, Outlet } from "react-router-dom";
import  { LoginContext } from "./Home";
import { useContext } from "react";

export default function MenuLink() {
    const [login] = useContext(LoginContext);
    const linkStyle = {
        marginRight: "10px",
        backgroundColor: "#007bff",
        color: "white",
        padding: "8px 16px",
        textDecoration: "none",
        borderRadius: "4px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        transition: "background-color 0.3s",
        cursor: "pointer"
        
    };

    return (
        <>

            <div></div>
            <nav style={{ position: "fixed", top: "30px", right: "50px" }}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/recipes" style={linkStyle}>Show Recipes List</Link>
                {login ? <Link to="/add" style={linkStyle} >Add recipe</Link> : null}
            </nav>
            <Outlet />
        </>
    );
}