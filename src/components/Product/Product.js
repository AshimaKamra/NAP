import React from 'react';
import './Product.css';




const product=(props)=>{
    console.log(props);
    return(
        
        <div className="product-panel container-fluid">
           <div className="row" id="myObj">
               <div class="col-sm-4">
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
           </div>
        </div>
            
    )
       
    
}
export default product;