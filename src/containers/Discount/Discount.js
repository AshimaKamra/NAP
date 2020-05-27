import React, { Component } from 'react';
import axios from 'axios';
class Discount extends Component
{
   render(){
       return(
          <div>
             <form className="filter-form">
                                               <div className="tb">
                                               <div className="td">
                                                   <input type="text" placeholder="Discount Number" required/>
                                                       <div>
                                                       </div>
                                               </div>
                                              </div>
                                               </form>
                                               <br/>
                                               <form className="filter-form">
                                               <div className="tb">
                                               <div className="td">
                                                  <input type="checkbox" id="greater_than" name="greater_than"/>
                                                  <label >Greater than</label>
                                                  <br/>
                                                  <input type="checkbox" id="Less_than" name="Less_than"/>
                                                  <label >Less than</label>
                                                  <br/>
                                                  <input type="checkbox" id="equal_to" name="equal_to"/>
                                                  <label>Equal to</label>
                                                <div>
                                                </div>
                                               </div>
                                              </div>
                                              </form>
          </div>
       )
   }
}
export default Discount;