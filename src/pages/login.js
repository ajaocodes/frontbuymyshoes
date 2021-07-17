import React from "react";

const Login = (props) => {

    const url = "https://buymyshoes.herokuapp.com/";

  const blank = {
    username: "",
    password: "",
  };

  const [form, setForm] = React.useState(blank);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = form;
    fetch(url+"login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.localStorage.setItem("token", JSON.stringify(data));
        setForm(blank);
        props.history.push("/");
      });
  };

  return (
    <div style ={{textAlign:"center"}}>
    <br /><br /><br /><br />
      <h1 style={{color: "brown"}}>Log In</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <h3>Username</h3>
        <input style= {{width:"40%",color: "black", textAlign:"center"}}
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <h3>Password</h3>
        <input style= {{width:"40%",color: "black", textAlign:"center"}}
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Log In" className="submit-button" />
      </form>
      <br />
    </div>
  );
};

export default Login;