import React,{Component} from 'react';

class Stock extends Component
{
    state={
        search:""
    }
    renderProduct=pro=>{
        const {search} =this.state;
        
        if(search!==""&&pro.stockKey.toLowerCase().indexOf(search.toLowerCase())===-1)
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
    <div className="brand-name">{pro.brand}<br/>M.R.P-{pro.regularprice}<br/>Offer Price-{pro.offerprice}{pro.createdat}<br/>{pro.stockKey}</div>
           </div>
          </div>
         
        
      
    }
    handleOnInputChange=(event)=>{
        this.setState({search:event.target.value});
        
     }
    render()
    {
        return(
            <div>
                <form className="filter-form">
                                               <div className="tb">
                                               <div className="td">
                                               <input 
                                               type="text" 
                                               name="search"
                                               id="search-input"
                                               placeholder="Search" 
                                               onChange={this.handleOnInputChange}
                                                />
                                               </div>
                                              </div>
                                              </form>
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
export default Stock;