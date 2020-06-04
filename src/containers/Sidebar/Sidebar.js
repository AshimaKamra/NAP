import React,{Component} from 'react';
import {UncontrolledCollapse, Button, CardBody, Card, Label} from 'reactstrap';

import './Sidebar.css';

import CreatedAt from '../CreatedAt/CreatedAt';
import {Link} from 'react-router-dom';
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
                                                  <button className="brand" style={{width:'100%',borderRadius:'3px'}}><Link to="/brand" style={{width:'50%'}}>Click to search</Link></button>
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
                                           <button className="brand" style={{width:'100%',borderRadius:'3px'}}><Link to="/discount" style={{width:'50%'}}>Click to search</Link></button>
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
                                            
                                            <button className="stock" style={{width:'100%',borderRadius:'3px'}}><Link to="/stock" style={{width:'50%'}}>Click to search</Link></button>
                                          
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
                            </div>
            </div>
        )
    }
}

export default Sidebar;