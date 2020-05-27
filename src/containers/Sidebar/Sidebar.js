import React,{Component} from 'react';
import {UncontrolledCollapse, Button, CardBody, Card, Label} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import './Sidebar.css';
import Brand from '../Brand/Brand';
import Discount from '../Discount/Discount';
import Stock from '../Stock/Stock'
import CreatedAt from '../CreatedAt/CreatedAt'
class Sidebar extends Component
{
    
    render(){
        return(
            <div className="sidebar-panel">
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
                                                  <Brand/>
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
                                               <Discount/>
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
                                            <Stock/>
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
                                        <CreatedAt/>
                                       </Card>
                                    </UncontrolledCollapse>
                                </div>
                                <hr/>
                                <div className="Created-at-filter">
                                    <div className="filter clearfix">
                                        <div className="sidebar-filter float-left">
                                            All Products
                                        </div>
                                        <div className="filter-toggle float-right">
                                        <Button color="black" id="toggler-allproducts" className="toggler" style={{marginBottom: '1rem'}}>
                                               +
                                       </Button>
                                        </div>
                                    </div>
                                    <UncontrolledCollapse toggler="toggler-allproducts">
                                        <Card>
                                            <Button>
                                    <NavLink to="/AllProducts " style={{color:'white'}}>AllProducts</NavLink>
                                    </Button>
                                       </Card>
                                    </UncontrolledCollapse>
                                </div>
                                
                            </div>
            </div>
        )
    }
}

export default Sidebar;