import React, {Component} from 'react';
import './RetailerApp.css';
import {UncontrolledCollapse, Button, CardBody, Card} from 'reactstrap';
// import Discount from './containers/Discount/Discount';
// import Brand from './containers/Brand/Brand';
// import CreatedAt from './containers/CreatedAt/CreatedAt';
// import Stock from './containers/Stock/Stock';
import Banner from './containers/UI/Banner/Banner';
import Products from './containers/Products/Products';
import { Route } from 'react-router-dom';
class RetailerApp extends Component {
    render()
    {
        return(
          
            <div className="RetailerApp">
                <div>
            <Banner/>
            </div>
            <br/>
                <div className="Product-heading">
                    <p>All Products</p>
                </div>
              <br/>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 sidebar boundry-top position-sticky">
                            <br/>
                            <div className="sidebar-filters">
                                <div className="filter-heading">
                                    <p>FILTERS</p>
                                </div>
                               
                                <div className="brand-filter">
                                    <div className="filter clearfix">
                                        <div className="sidebar-filter float-left">
                                            BRAND
                                        </div>
                                        <div className="filter-toggle float-right">
                                           <Button color="black" id="toggler-brand" className="toggler" style={{marginBottom: '1rem'}}>
                                               +
                                           </Button>
                                           
                                        </div>
                                    </div>
                                    <UncontrolledCollapse toggler="#toggler-brand">
                                        <Card>
                                       <form className="filter-form">
                                           <div className="tb">
                                               <div className="td">
                                                   <input type="text" placeholder="Search" required/>
                                                       <div>
                                                       </div>
                                               </div>
                                           </div>
                                       </form>
                                       </Card>
                                    </UncontrolledCollapse>
                                </div>
                                <hr/>
                                <div className="Discount-filter">
                                    <div className="filter clearfix">
                                       <div className="sidebar-filter float-left">
                                           Discount
                                       </div>
                                       <div className="filter-toggle float-right">
                                       <Button color="black" id="toggler-discount" className="toggler" style={{marginBottom: '1rem'}}>
                                               +
                                       </Button>
                                       </div>
                                    </div>
                                    <UncontrolledCollapse toggler="#toggler-discount">
                                       <Card>
                                           <CardBody>
                                               <form className="filter-form">
                                               <div className="tb">
                                               <div className="td">
                                                   <input type="text" placeholder="Discount Number" required/>
                                                       <div>
                                                       </div>
                                               </div>
                                              </div>
                                               </form>
                                               <br/>
                                               <form className="filter-form">
                                               <div className="tb">
                                               <div className="td">
                                                  <input type="checkbox" id="greater_than" name="greater_than"/>
                                                  <label >Greater than</label>
                                                  <br/>
                                                  <input type="checkbox" id="Less_than" name="Less_than"/>
                                                  <label >Less than</label>
                                                  <br/>
                                                  <input type="checkbox" id="equal_to" name="equal_to"/>
                                                  <label>Equal to</label>
                                                <div>
                                                </div>
                                               </div>
                                              </div>
                                              </form>
                                           </CardBody>
                                       </Card>
                                    </UncontrolledCollapse>
                                </div>
                                <hr/>
                                <div className="Stock-filter">
                                    <div className="filter clearfix">
                                        <div className="sidebar-filter float-left">
                                            Stock Check
                                        </div>
                                        <div className="filter-toggle float-right">
                                        <Button color="black" id="toggler-stock" className="toggler" style={{marginBottom: '1rem'}}>
                                               +
                                       </Button>
                                        </div>
                                    </div>
                                    <UncontrolledCollapse toggler="toggler-stock">
                                        <Card>
                                            <CardBody>
                                            <form className="filter-form">
                                               <div className="tb">
                                               <div className="td">
                                                  <input type="checkbox" id="in_stock" name="in_stock"/>
                                                  <label >In Stock</label>
                                                  <br/>
                                                  <input type="checkbox" id="out_of_stock" name="out_of_stock"/>
                                                  <label >Out of stock</label>
                                                
                                                <div>
                                                </div>
                                               </div>
                                              </div>
                                              </form>
                                            </CardBody>
                                        </Card>
                                    </UncontrolledCollapse>
                                </div>
                                <hr/>
                                <div className="Created-at-filter">
                                    <div className="filter clearfix">
                                        <div className="sidebar-filter float-left">
                                            Created At
                                        </div>
                                        <div className="filter-toggle float-right">
                                        <Button color="black" id="toggler-created" className="toggler" style={{marginBottom: '1rem'}}>
                                               +
                                       </Button>
                                        </div>
                                    </div>
                                    <UncontrolledCollapse toggler="toggler-created">
                                        <Card>
                                    <input type="date" id="start" name="trip-start"
                                           defaultValue="2018-07-22"
                                        min="2018-01-01" max="2018-12-31"/>
                                       </Card>
                                    </UncontrolledCollapse>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-sm-9 products-panel">
                           
                                  <Route path="/" component={Products}/>
                           
                        </div>
                    </div>
                </div>
               
            </div>
            
        );
    }
}
           
export default RetailerApp;