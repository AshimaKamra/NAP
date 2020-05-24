import React,{Component} from 'react';
import BannerBackground from '../../../assets/Banner-Background.jpg';
import './Banner.css';
class Banner extends Component
{
    render(){
        return(
            <div className="Banner-deck">
                <div className="container Banner-container">
                    <div className="row">
                        <div className="col-sm-6 banner-inner">
                            <div className="Banner-content">
                                <p className="block-heading">Net-a-porter<br/>NAP</p>
                            <p className="Banner-content-desc">At NAP, we identify your competitors and map each product in your own inventory with a similar product on your competetition's catalouge.This web app processes and analyses the data and helps you making a day-to-day pricing decision.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <img src={BannerBackground} style={{width: '555px',height:'300px'}} alt="Banner"/>
                        </div>
                    </div>
                 
                </div>
            </div>
        )
    }
}
export default Banner;