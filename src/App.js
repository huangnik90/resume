import React from 'react';
import './App.css';
import { Route,Switch,withRouter} from 'react-router-dom'
import Home from './components/home'
import Header from './components/header'
import Work from './components/work'
import Contact from './components/contact'
import Footer from './components/footer'
import PageNotFound from './components/404'
import ScrollTop from './components/scrollToTop'

function App() {
  return (
    <div>
      <ScrollTop>
      <Header/>
             <Switch> 
                  <Route path='/' component={Home} exact/>
                  <Route path='/about' component={Work} exact/>
                  <Route path='/contact' component={Contact} exact/>
                  <Route path='*' component={PageNotFound} />
             </Switch>
      <Footer/>

      </ScrollTop>
    
    </div>
  );
}

export default withRouter((App));
