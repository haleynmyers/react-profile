import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper/index";
import Header from "./components/Header/index.js";
import Section from "./components/Section/index.js";
import Footer from "./components/Footer/index.js";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import NoMatch from "./pages/NoMatch";

class App extends React.Component {
  render(){
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
  };
}

export default App;
