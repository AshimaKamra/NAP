import React from 'react';
import './Product.css';
import {withRouter} from 'react-router-dom';


const product=(props)=>{
    return(
        <div className="row clearfix">
            <div className="card-wrapper-container col-xs-12 col-sm-6 col-md-4">
                <div className="product-list-box card desktot-cart">
                    <div className="row">
                        <div className="col-xs-12 card-img-container">
                            <div className="card-img">
                                <div></div>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="product-name">
                                <h2>{props.brandName}</h2>
                            </div>
                            <div className="clearfix product-price-content">
                                <div className="price-offer">
                                    <span>{props.price}</span><span>{props.discount}</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(product);