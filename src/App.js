import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Banner from './containers/UI/Banner/Banner';
import Footer from './components/Footer/Footer';
import Products from './containers/Products/Products'
import Sidebar from './containers/Sidebar/Sidebar';
import Brand from './containers/Brand/Brand'
class App extends Component
{
   render()
   {
     return(
       
       <div className="App">
         <BrowserRouter>
         <Banner/>
         <div className="Product-heading">
            <p>All Products</p>
          </div>
          <br/>
         <div className="container">
           <div className="row">
              <div className="col-sm-3 sidebar boundry-top position-sticky">
                  <Sidebar/>
              </div>
            <div className="col-sm-9 products-panel">
                  <Switch>
                 <Route path="/AllProducts" component={Products}/>
                 <Route path="/brand:brandname" component={Brand}/>
                  </Switch>
            </div>
            </div>
           </div>
        <Footer/>
        </BrowserRouter>
       </div>
   )}
  }
export default App;
