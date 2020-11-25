import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/style.css';
import { Helmet } from 'react-helmet';

// Importing Context
import { Provider } from './data/Context';

// Importing Components
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Contact from './components/pages/contact/Contact';
import Product from './components/pages/product/Product';

function App() {
   return (
      <Provider>
         <Router>
            <ScrollToTop />
            <React.Fragment>
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about-us' component={About} />
                  <Route exact path='/contact' component={Contact} />
                  <Route
                     exact
                     path='/products/order/:name/:id'
                     component={Product}
                  />
               </Switch>
               <Footer />
            </React.Fragment>
         </Router>
      </Provider>
   );
}

export default App;
