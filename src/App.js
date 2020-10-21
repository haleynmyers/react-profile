import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/index.js";
import Section from "./components/Section/index.js";
import Footer from "./components/Footer/index.js";

function App() {
  return (
   <Wrapper>
     <Header />
     <Section />
     <Footer />
   </Wrapper>
  );
}

export default App;
