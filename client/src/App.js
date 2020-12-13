import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import About from './screens/About';
import Contact from './screens/Contact';
import Main from './containers/Main';


function App() {
  return (
    <Layout>
      <Switch>
          <Route path='/about'>
            About Me Section
            <About />
          </Route>
          <Route path='/work'>
          </Route>
          <Route path='/contact'>
            {/* Contact Section */ }
            <Contact />
          </Route>
          <Route path='/'>
            {/* Home Section */ }
            <Main />
          </Route>
      </Switch>
    </Layout>
  );
}
export default App;
