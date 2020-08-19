import React,{Component} from 'react'
import {Link} from 'react-router-dom'


export default class Personalized extends Component{
    render()
    {
        return(
            <div>
                <div className='personal offset-xl-1'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                            <div className='personal1'>
                            Personalized Queing solutions based on different customers
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6'>
                            <div className='personal2'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                            </div>
                             <div className='personal3-1'>

                              <i class='fas fa-check'style={{color:'#255ED6',fontSize:'20px'}}><i className='personal3'> B2B – bank, Retail, etc |	B2C - Hospital</i>  </i><br/>
                              <i class='fas fa-check' style={{color:'#255ED6',fontSize:'20px'}}><i className='personal3'> Token against payment - Hospita,
                              Only Token Tracking  , with existing Token issues proces</i>  </i><br/>
                              <i class='fas fa-check' style={{color:'#255ED6',fontSize:'20px'}}><i className='personal3'> Voice based Token announcement – Big Ground Queu</i>  </i><br/>
                              <i class='fas fa-check' style={{color:'#255ED6',fontSize:'20px'}}><i className='personal3'> Data security – Queue manaegement – large corporations/Retail stor</i>  </i><br/>
                            </div>
                        </div>
                       
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6'>
                           <div className='personal4'>
                               <img src={require('./m 2.png')} className='imgsrc1'></img>
                           </div>
                           </div>
                    </div>
                </div>
            </div>
        )
    }
}