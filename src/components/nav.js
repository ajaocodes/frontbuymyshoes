import React from "react";
import {Link} from "react-router-dom";
import "milligram";

const NavBar = () => {
    ///////////////////////////////
    //STYLE OBJECT
    ////////////////////////////////

    const appname = {
        textAlign: "center",
        margin: "10px",
        backgroundColor: "lightgray",
        color:"brown",
        size: "200em",
        padding: "40px",
        fontSize: "5em",
        font: 'Pacifico'
      }

return <header>
<h1 Class="navTitle" style={appname}>Buy My Shoes</h1>
<nav>
<Link to="/"><div>Home</div></Link>
<Link to="/signup"><div>SignUp</div></Link>
<Link to="/login"><div>Login</div></Link>

</nav>
</header>

}

export default NavBar;