import AllShoes from './pages/AllShoes';
import SingleShoe from './pages/SingleShoe';
import NavBar from './components/nav';
import Signup from "./pages/signup";
import Login from "./pages/login";
import Footer from './components/footer';
import Auth from './pages/Auth';
import Form from './pages/Form';
import "milligram";
import React, {useState, useEffect} from "react"
import {Route, Switch, Link } from "react-router-dom"
import './App.css';


function App(props) {
  ///////////////////
  // Style Objects
  ///////////////////
  const button = {
    backgroundColor: "green",
    display: "block",
    margin: "auto"
  }

  //////////////////////
  // State & Other Variables
  ///////////////////////

  // API URL
  const url = "https://buymyshoes.herokuapp.com/shoes/"

  // State to hold the list of shoes
  const [shoes, setShoes] = useState([]);

  // State to hold 

  const nullShoe = {
    title: "",
    description: "",
    image: "",
    price: ""
    }

 const [targetShoe, setTargetShoe] = useState(nullShoe)

  /////////////////
  // Functions
  ////////////////
 const getShoes = async() => {
    const response = await fetch(url, {
      method: "get",
    })
    const data = await response.json()
    console.log (data)
    setShoes(data)
  };

  const addShoes = async (newShoe) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newShoe)
    });
    getShoes();
  };

  const getTargetShoe = (shoe) => {
    setTargetShoe(shoe)
    props.history.push("/edit")
  }

  const updateShoe = async (shoe) => {
    const response = await fetch(url + shoe.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shoe)
    })
    getShoes()
  }

  const deleteShoe = async (shoe) => {
    const response = await fetch(url + shoe.id + "/", {
      method: "delete"
    })
    getShoes()
  }

  ////////////////////////////
  //USER AUTH FUNCTIONS
  ///////////////////////////




  //////////////////
  // useEffects
  //////////////////
  useEffect(() => {getShoes()}, [])

  /////////////////
  // Returned JSX
  /////////////////
return (
  <div Class="zap">
  <Route path="/" component={NavBar} /> <br />
   <Link to="/new"><button style={button}>Post Shoe for sale</button></Link>
   <br />
  <Switch>
  <Route 
    exact 
    path="/"
    render = {(rp) => <AllShoes shoes={shoes} {...rp}/>}
  />
  <Route 
    path="/shoe/:id"
    render = {(rp) => <SingleShoe
      shoes={shoes} 
      edit={getTargetShoe}
      deleteShoe={deleteShoe}
      {...rp}/>}
  />
  <Route
    path="/new"
    render={(rp) => <Form 
      initialShoe={nullShoe}
      handleSubmit={addShoes}
      buttonLabel="Sell Shoe"
      {...rp}/>}
  />
  <Route
    path="/edit"
    render={(rp) => <Form 
      initialShoe={targetShoe}
      handleSubmit={updateShoe}
      buttonLabel="Update"
      {...rp}/>}
     />
     <Route exact path="/signup" render={(rp) => <Signup {...rp} />} />
     <Route exact path="/login" render={(rp) => <Login {...rp} />} />
  </Switch>
  <Route path="/" component={Footer} />
  </div>
  );
}

export default App;
