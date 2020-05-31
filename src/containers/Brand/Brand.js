import React,{Component} from 'react';
import axios from 'axios';
import {UncontrolledCollapse, Button, CardBody, Card, Label} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import Product from '../../components/Product/Product';
class Brand extends Component
{
    state={
        search:""
    }

    renderProduct=pro=>{
        const {search} =this.state;
        var code =pro.code.toLowerCase()
        if(search!==""&&pro.brand.toLowerCase().indexOf(search.toLowerCase())===-1)
        {
            return null;
        }
        return <div class="col-sm-4">
        <div className="card card-body">
            <div className="product-picture">
                <img src={pro.image} style={{width:'180px',height:'185px'}} alt="ProductImage"/>
            </div>
            <div>
                <h2 className="product-name">{pro.name}</h2>
            </div>
        <div className="brand-name">{pro.brand}<br/>{pro.discount}{pro.createdat}</div>
        </div>
    </div>
        
      
    }
    
    handleOnInputChange=(event)=>{
       const query=event.target.value;
       console.log(query)
       
    }
    render()
    {
        const {query}=this.state;
       console.warn(query);
        return(
            <div className="brand">
                  <div className="clearfix">
                    <div className="float-left"><label className="searh-label" htmlFor="search-input">
                    <input 
                    type="text" 
                    value={query}
                    name="query"
                    id="search-input"
                    placeholder="Search" 
                    onChange={this.handleOnInputChange}
                    required/>
                     </label></div>
                    <div className="float-right">
                    <Button><NavLink to="/brand">Go</NavLink> </Button></div>
                    </div>
            </div>
        )
    }
}
export default Brand;