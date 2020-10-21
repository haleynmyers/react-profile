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
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route exact path={process.env.PUBLIC_URL + "/home"} component={Home} />
            <Route exact path={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio} />
            <Route exact path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
            <Route exact path={process.env.PUBLIC_URL + "/resume"} component={Resume} />
            <Route path={process.env.PUBLIC_URL + "*"} component={NoMatch} />
          </Switch>
        </Section>
      <Footer />
    </Wrapper>
    </Router>
  );
}

export default App;
