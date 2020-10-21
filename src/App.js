import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper/index";
import Header from "./components/Header/index.js";
import Section from "./components/Section/index.js";
import Footer from "./components/Footer/index.js";
import { Home, Contact, Portfolio, NoMatch } from "./pages";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <Wrapper>
      <Header />
        <Section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Section>
      <Footer />
    </Wrapper>
    </Router>
  );
}

export default App;
