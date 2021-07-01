// Import useState hook
import React, { useState } from "react";

//destructure out props, including router prop history
const Form = ({ initialShoe, history, handleSubmit, buttonLabel }) => {
  ////////////////
  // The Form Data State
  ////////////////

  // Initiallize the form with the initialShoe state
  const [formData, setFormData] = useState(initialShoe);

  // Functions
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value })
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    handleSubmit(formData)
    history.push("/")
  }
  
    return (
      <form onSubmit={handleSubmission}>
        <input
          type="text"
          onChange={handleChange}
          value={formData.title}
          name="title"
        />
        <input
          type="text"
          onChange={handleChange}
          value={formData.description}
          name="description"
        />
        <input
          type="text"
          onChange={handleChange}
          value={formData.image}
          name="image"
        />
        <input
        type="number"
        onChange={handleChange}
        value={formData.price}
        name="price"
      />
        <input type="submit" value={buttonLabel} />
      </form>
    );
  };
export default Form;