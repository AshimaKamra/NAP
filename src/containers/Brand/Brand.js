import React,{Component} from 'react';

class Brand extends Component
{
    state={
        search:""
    }

    renderProduct=pro=>{
        const {search} =this.state;
        
        if(search!==""&&pro.brand.toLowerCase().indexOf(search.toLowerCase())===-1)
        {
            return null;
        }
        return  <div class="col-sm-4">
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
         // return <Product image={pro.image} name={pro.image} brand={pro.brand} discount={pro.discount} createdat={pro.createdat}/>
        
      
    }
    
    handleOnInputChange=(event)=>{
       this.setState({search:event.target.value});
       
    }
    render()
    {    
        return(
            <div className="brand">
                  <div className="clearfix">
                    <div className="float-left"><label className="searh-label" htmlFor="search-input"></label>
                    <input 
                    type="text" 
                    name="search"
                    id="search-input"
                    placeholder="Search" 
                    onChange={this.handleOnInputChange}
                    />
                     </div>
                   
                    </div>
                    <br/>
                    <div className="product-panel container-fluid">
                <div className="row" id="myObj">
                {
                            this.props.productList.map(pro=>{
                               return this.renderProduct(pro);
                            })
                        }
                 </div>
                </div>
            </div>
        )
    }
}
export default Brand;