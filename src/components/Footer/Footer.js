import React from 'react';
import {Jumbotron, Button} from 'reactstrap';

import './Footer.css'
import Contactme from '../../assets/contact-me.jpg';

const footer=()=>{
  return(
      <div className="Footer">
          <h4 className="heading">Contact Me</h4>
          <Jumbotron fluid>
                    <div className="container">
                    <section className="my-5">
                        <div className="row">
                            <div className="col-lg-5 mb-lg-0 mb-4 form">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="dark-grey-text">Contact me from here and know about me</p>
                                        <div className="md-form">
                                                <i className="fas fa-user prefix grey-text"></i>
                                                <input type="text" id="form-name" className="form-control"/>
                                                <label for="form-name">Your name</label>
                                        </div>
                                        <div className="md-form">
                                            <i className="fas fa-envelope prefix grey-text"></i>
                                            <input type="text" id="form-email" className="form-control"/>
                                            <label for="form-email">Your email</label>
                                        </div>
                                        <div className="md-form">
                                                <i className="fas fa-pencil-alt prefix grey-text"></i>
                                                <textarea id="form-text" className="form-control md-textarea" rows="3"></textarea>
                                                <label for="form-text">Send message</label>
                                        </div>
                                        <div className="text-center">
                                                <Button className="btn btn-light-blue" >Submit</Button>
                                         </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 picture">
                               <img src={Contactme} width="600px" height="376px" alt="ContactMe" /> 
                            </div>
                            
                        </div>
                        <br/>
                        <hr/>
                        <div className="row text-center">
                                
                                <div className="col-md-3">
                                        
                                        <p>+917014004435, India</p>
                                    </div>
                                    <div className="col-md-3">
                                           
                                            <p>akkamra18@gmail.com</p>
                                        </div>
                                        <div className="col-md-3">
                                               
                                                <p><a href="https://github.com/AshimaKamra/NAP">GitHub- AshimaKamra</a></p>
                                            </div>
                                            <div className="col-md-3">
                                    
                                    <p><a href="https://www.linkedin.com/in/ashimakamra/">Linkdin- Ashima Kamra</a></p>
                                </div>
                            </div>
                            <hr/>
                    </section>
                </div>
                
                    
                  
           
             
          </Jumbotron>
          
      </div>
  )
}


export default footer;