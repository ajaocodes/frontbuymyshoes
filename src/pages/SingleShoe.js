import React from "react";
import {Link} from "react-router-dom"
const SingleShoe = ({shoes, match, edit, deleteShoe, history}) => {
  const id = parseInt(match.params.id)
  const shoe = shoes.find((shoe) => {
    return shoe.id === id
  })
  //////////////////////
  // Styles
  //////////////////////
  const div = {
    textAlign: "center",
    border: "2px dotted green",
    width: "80%",
    margin: "30px auto"
  }
  const img = {
    imageSize: "400px",
    width: '40%',
    height: '40%'
  }

  return <div style={div}>
    <h1 style = {{textfont:"40px"}}> {shoe.title}</h1>
    <h2>{shoe.description}</h2>
    <img src={shoe.image} style={img} alt="" /><br /><br />
    <h2>${shoe.price}</h2>

    <button style = {{margin: "10px",backgroundColor: "lightgreen"}}onClick={(event) => {
      edit(shoe)
      }
    }>Edit</button>

    <button style = {{margin: "10px",backgroundColor: "red"}}onClick={(event) => {
      deleteShoe(shoe)
      history.push("/")
    }}>Delete</button>

    <Link to="/">
      <button style = {{margin: "10px",backgroundColor: "blue"}}>Go Back</button>
    </Link>
  </div>;
};
export default SingleShoe;