import React, { Component } from 'react';
class Discount extends Component
{
   state={
      discountSearch:"",
      operatorSearch:""
   }
   renderEqualDiscount=pro=>{
      const {discountSearch}=this.state;

      if(discountSearch!=="" &&pro.offerprice.indexOf(discountSearch)===-1)
      {
         return null;
      }
      return <div class="col-sm-4">
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

   }
   


   handleOnInputChange=(event)=>{
      this.setState({discountSearch:event.target.value});
      
   }
   render(){
       return(
          <div>
             <hr/>
             <div className="clearfix" >
             <form className="filter-form">
              <div className="tb" >
              <div className="td float-left">
              <label className="searh-label" htmlFor="search-input"></label>
              <input 
                    type="number" 
                    name="search"
                    id="search-input"
                    placeholder="Search" 
                    onChange={this.handleOnInputChange}
                    />
               </div>
               </div>
               </form>
               </div>
               <hr/>
               <div className="product-panel container-fluid">
                <div className="row" id="myObj">
                {
                            this.props.productList.map(pro=>{
                               return this.renderEqualDiscount(pro);
                            })
                        }
                 </div>
                </div>
          </div>
       )
   }
}
export default Discount;