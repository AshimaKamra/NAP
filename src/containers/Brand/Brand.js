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

    renderProduct=product=>{
        const {search} =this.state;
        var code =product.code.toLowerCase()
        if(search!==""&&product.brand.name.toLowerCase().indexOf(search.toLowerCase())===-1)
        {
            return null;
        }
        return <div class="col-sm-4">
        <div className="card card-body">
            <div className="product-picture">
                <img src={props.image} style={{width:'180px',height:'185px'}} alt="ProductImage"/>
            </div>
            <div>
                <h2 className="product-name">{props.name}</h2>
            </div>
        <div className="brand-name">{props.brand}<br/>{props.discount}{props.createdat}</div>
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
                    <Button><NavLink to="/brnad">Go</NavLink> </Button></div>
                    </div>
            </div>
        )
    }
}
export default Brand;