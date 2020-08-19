import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends Component{
    render()
    {
        return(
            <div>
                <div className='footer '>
                <div className='container'>
                <div className='row'>
                    <div className='footer1 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3'>
                        <div className='description'>
                            <div className='zero'>
                                Zerozam Systems
                            </div>
                            <div className='text'>We believe that our innovative & simple to use technology should help people improve their lifestyle. Our vision is to cut down average wait time of people by 80% with our unique concept called "Zerozam Number". Let mobile wait in queue, not you
                      </div>
                        </div>
                    </div>
                        
                    <div className='footer1 col-6  col-sm-6 col-md-6 col-lg-6 col-xl-3'>
                        <div class='description'>
                            <div className='zero'>
                                Company
                            </div>
                            <div className='text'>
                               About Us
                            </div>
                            <div className='text'>
                                Faq
                            </div>
                            <div className='text'>
                                Contact us
                            </div>
                        </div>
                    </div>


                   
                    <div className='footer1 col-6  col-sm-6 col-md-6 col-lg-6 col-xl-3'>
                          <div className='description'>
                              <div className='zero'>
                                  Products
                              </div>
                              <div className='text'>
                                  Covid-19 queing
                              </div>
                              <div className='text'>
                                  Support
                              </div>
                          </div>
                        


                    </div>
                    <div className='footer1 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3'>
                       <div className='description'>
                           <div class='zero'>
                               Follow Us
                           </div>
                          
                           <i class="fab fa-linkedin icon" ></i>
            <i class="fab fa-youtube icon"></i>
            <i class="fab fa-facebook icon" ></i>
            <i class="fab fa-twitter icon" ></i>
            <i class="fab fa-instagram icon" ></i>
                          
                       </div>
                    </div>
                </div>
                </div>
                <hr className='hori'>
               
                </hr>
                <div className='copy offset-xl-1'>
                <span>@Copyright 2018. All Rights Reserved. Zerozam Systems Pvt. Ltd.</span>
                </div>
                </div>
                
            </div>
        )
    }
}
