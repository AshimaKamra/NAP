import React,{Component} from 'react';

import axios from 'axios';
import Product from '../../components/Product/Product';

class Products extends Component
{
    state = {
        products:[],
        loading:true
       
    }

    componentDidMount() {
      axios.get('https://greendeck-datasets-2.s3.amazonaws.com/netaporter_gb_similar.json')
      .then(res=>{
        //   const obj=JSON.parse(res.data);
           console.log(res);
          let fetchedProducts=[];
           fetchedProducts = res.data.slice( 0, 20 );
          for(let key in res.data)
          {
              fetchedProducts.push({
                  ...res.data[key],
                  id:key
              });
          }
         
          this.setState({loading:false,products:fetchedProducts})
      })
      .catch(error=>{
          console.log(error);
      })
    }

    render () {
        let products=null;
        if(this.state.error)
        {
         products=<p style={{textAlign:'center'}}>Something went wrong</p>
        }
        else
        {
            products=this.state.products.map(pro=>{
                return (<Product 
                       key={pro._id}
                       name={pro.name}
                       brand={pro.brand.name}/>
                    )
            })
        }
        return (
            <div>
               <h1>{this.state.products.name}</h1>
            {products}
            
                  
            </div>
        );
    }
}
export default Products;