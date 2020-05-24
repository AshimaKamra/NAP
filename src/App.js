import React,{Component} from 'react';
import RetailerApp from './RetailerApp';
import {BrowserRouter} from 'react-router-dom';
class App extends Component
{
   render()
   {
     return(
       <BrowserRouter>
       <div className="App">
         <RetailerApp/>
       </div>
       </BrowserRouter>
         
     )
   }
}
export default App;
