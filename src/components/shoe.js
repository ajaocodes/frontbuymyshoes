import React from "react"
import {Link} from "react-router-dom"

const Shoe = ({shoe}) => {

    /////////////////////
    // Style Objects
    /////////////////////
    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%"
    }
    return <div style={div}>
        <Link to={`/shoe/${shoe.id}`}>
            <h1>{shoe.title}</h1>
        </Link>
        <h2>${shoe.price}</h2>
    </div>
}
export default Shoe;