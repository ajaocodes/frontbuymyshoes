// import React from "react";
import React, {useState} from "react"
// import { Link } from "react-router-dom";

const Signup = (props) => {

  const url = "https://buymyshoes.herokuapp.com/";

  const blank = {
    username: "",
    password: "",
  };

  const [userform, setUserform] = useState({
    username: "",
    password: "",
  });

  // Current user and token
  const [user, setUser] = useState(null)
  const [authToken, setAuthToken] = useState("")

  const handleChange = (event) => {
    setUserform({ ...userform, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password} = userform;


    fetch(url + "signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserform(blank);
        props.history.push("/login");
      });
  };

  return (
    <div style={{textAlign:"center"}}>
    <br /><br /><br /><br />
      <h1 style= {{color: "brown"}}>Sign up</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <h3>Username</h3>
        <input style= {{width:"40%",color: "black", textAlign:"center"}}
          type="text"
          name="username"
          value={userform.username}
          onChange={handleChange}
        />
        <h3 style= { {textAlign: "center"}}>Password</h3>
        <input style= {{width:"40%",color: "black", textAlign:"center"}}
          type="password"
          name="password"
          value={userform.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" name="signup" value="Sign Up" />
      </form>
      <br />
    </div>
  );
};

export default Signup;