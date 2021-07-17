import React from "react";
import {Link} from "react-router-dom";
import "milligram";

const Footer = () => {
    const foot= {
        textAlign: "center",
        margin: "10px",
        backgroundColor: " ",
        color:"black",
        size: "200em",
        padding: "40px",
        fontSize: "1em",
        width:"100%"
    }

    return<footer>
<nav>
    <h2 style={foot}>Buy my shoes app created by Aj</h2>
    </nav>
    </footer>
}
export default Footer;