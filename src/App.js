import AllShoes from './pages/AllShoes';
import SingleShoe from './pages/SingleShoe';
import Form from './pages/Form';
import React, {useState, useEffect} from "react"
import {Route, Switch, Link } from "react-router-dom"
import './App.css';

function App(props) {
  ///////////////////
  // Style Objects
  ///////////////////
  const h1 = {
    textAlign: "center",
    margin: "10px"
  }


  //////////////////////
  // State & Other Variables
  ///////////////////////
  // API URL
  const url = "https://buymyshoes.herokuapp.com/shoes"

  // State to hold the list of posts
  const [shoes, setShoes] = useState([])


  /////////////////
  // Functions
  ////////////////
 const getShoes = async() => {
    const response = await fetch(url)
    const data = await response.json()
    setShoes(data)
  };

  //////////////////
  // useEffects
  //////////////////
  useEffect(() => {getShoes()}, [])



  /////////////////
  // Returned JSX
  /////////////////
return (
  <div className="App">
  <h1 style={h1}>Buy My Shoe</h1>
  <Switch>
  <Route
    exact 
    path="/"
    render = {(rp) =><AllShoes shoes={shoes}{...rp}/>}
  />
  <Route 
    path="/shoe/:id"
    render = {(rp) => <SingleShoe {...rp}/>}
  />
  <Route
    path="/new"
    render = {(rp) => <Form {...rp}/>}
  />
  <Route
    path="/edit"
    render = {(rp) => <Form {...rp}/>}
  />
  </Switch>
  </div>
);
}

export default App;
