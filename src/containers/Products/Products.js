import React,{Component} from 'react';

class Products extends Component
{
    
 
    render () {
        const newProduct=this.props.productList.map((pro)=>{
            console.log(pro);
            return (
                
                <div class="col-sm-4">
      <div className="card card-body">
          <div className="product-picture">
             <a href={pro.url}> <img src={pro.imgurl} style={{width:'180px',height:'185px'}} alt="ProductImage"/></a>
          </div>
          <div>
              <h6 className="product-name"><b>{pro.name}</b></h6>
          </div>
            <div className="brand-name">{pro.brand}<br/>M.R.P-{pro.regularprice}<br/>Offer Price-{pro.offerprice}{pro.createdat}</div>
         </div>
        </div>
            )
        })
       return(
        <div className="product-panel container-fluid">
        <div className="row" id="myObj">
            {newProduct}
           </div>
           </div>
           
       )
       
       
    }
}
export default Products;