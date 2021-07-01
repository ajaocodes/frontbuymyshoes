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
    border: "3px solid green",
    width: "80%",
    margin: "30px auto"
  }

  return <div style={div}>
    <h1>{shoe.title}</h1>
    <h2>{shoe.description}</h2>
    <h2>{shoe.image}</h2>
    <h2>${shoe.price}</h2>

    <button onClick={(event) => {
      edit(shoe)
      }
    }>Edit</button>

    <button onClick={(event) => {
      deleteShoe(shoe)
      history.push("/")
    }}>Delete</button>

    <Link to="/">
      <button>Go Back</button>
    </Link>
  </div>;
};
export default SingleShoe;