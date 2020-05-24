import React,{Component} from 'react';

import axios from '../../axios';
import Product from '../../components/Product/Product';

class Products extends Component
{
    state={
        products:[],
        loading: true
    }
    componentDidMount(){
        axios.get('/')
        .then(response=>{
            const products=response.data.slice(0,20);
            // const updatedProducts=products.map(product=>{
            //     return{
            //         ...product,
            //     }
            // });
            // this.setState({products:updatedProducts});
            const updatedProducts=[];
            for(let key in response.data)
            {
                updatedProducts.push({
                    ...response.data[key],
                    id:key
                });
            }
            this.setState({loading:false,products:updatedProducts})
        })
        .catch(error=>{
            this.setState({loading:false})
        })
    }
    render()
    {
        let products=<p style={{textAlign:'center'}}>Something went wrong!</p>
        if(!this.state.error)
        {
            products=this.state.products.map(product=>{
                return(
                    <Product
                    key={product._id}
                    brandName={product.name}
                    price={product.price.regular_price}
                    discount={product.price.offer_price}
                    stock={product.stock}
                    originDate={product.created_at}/>
                )
            })
        }
        return(
            <div>
                <section className="Products">
                    <div className="container">
                    {products}
                    </div>
                </section>
            </div>

        )
    }
}
export default Products;