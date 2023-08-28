import React from "react";
import Header from "./components/header/Header";
import Hero from './components/hero/Hero';
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from './components/Value/Value'; 
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
  <>
<div className="App">
  <Header />
  <Hero />
  <Companies />
  <Residencies />
</div>

<Value />
<Contact />
<GetStarted />
<Footer />

  </>)
}

export default App;