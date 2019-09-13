import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'



import Header from './components/header';
import Footer from './components/footer';
import Home from './components/Home/index';


const Routes = () => (
    <BrowserRouter>
        <Header/>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
       <Footer/>
    </BrowserRouter>
)

export default Routes;