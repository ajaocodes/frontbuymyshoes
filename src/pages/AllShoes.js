import React from "react"
import Shoe from "../components/shoe"

const AllShoes = (props) => {
    return props.shoes.map((shoe) => {
        return <Shoe shoe={shoe} key={shoe.id}/>
    })
}
export default AllShoes;