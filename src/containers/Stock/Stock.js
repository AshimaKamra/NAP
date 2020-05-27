import React,{Component} from 'react';
import axios from 'axios';

class Stock extends Component
{
    render()
    {
        return(
            <div>
                <form className="filter-form">
                                               <div className="tb">
                                               <div className="td">
                                                  <input type="checkbox" id="in_stock" name="in_stock"/>
                                                  <label >In Stock</label>
                                                  <br/>
                                                  <input type="checkbox" id="out_of_stock" name="out_of_stock"/>
                                                  <label >Out of stock</label>
                                                
                                                <div>
                                                </div>
                                               </div>
                                              </div>
                                              </form>
            </div>
        )
    }
}
export default Stock;