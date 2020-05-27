import React,{Component} from 'react';
import axios from 'axios';
import {UncontrolledCollapse, Button, CardBody, Card, Label} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Brand extends Component
{
    constructor(props){
        super(props);
        this.state={
            query:'',
            results:{},
            loading:false,
            message:''
        };
        this.cancel='';
    }
    fetchSearchResults =(updatedPageNo='', query)=>{
        const pageNumber=updatedPageNo ? `page=4${updatedPageNo}`: '';
        const searchUrl=`https://greendeck-datasets-2.s3.amazonaws.com/netaporter_gb_similar.json/search&brandName=${query}`
        if(this.cancel)
        {
            this.cancel.cancel();
        }
        this.cancel=axios.CancelToken.source();
        axios.get(searchUrl,{
            cancelToken:this.cancel.token
        })
        .then(res=>{
            console.log(res);
        })
        .catch(error=>{
            if(axios.isCancel(error)||error){
                this.setState({
                    loading:false,
                    message:'Failed to Fetch the data'
                })
            }
        })
    }
    handleOnInputChange=(event)=>{
       const query=event.target.value;
       console.log(query)
       this.setState({query:query,loading:true,message:''});
       this.fetchSearchResults(1,query);
    }
    render()
    {
        const {query}=this.state;
       console.warn(query);
        return(
            <div className="brand">
                  <div className="clearfix">
                    <div className="float-left"><label className="searh-label" htmlFor="search-input">
                    <input 
                    type="text" 
                    value={query}
                    name="query"
                    id="search-input"
                    placeholder="Search" 
                    onChange={this.handleOnInputChange}
                    required/>
                     </label></div>
                    <div className="float-right">
                    <Button><NavLink to={{pathname:'/brand',hash:'#search', search:'?brand=value'}}>Go</NavLink> </Button></div>
                    </div>
            </div>
        )
    }
}
export default Brand;