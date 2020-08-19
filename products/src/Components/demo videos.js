import React,{Component} from 'react'
import {Link} from 'react-router-dom'



export default class Demo extends Component{
    render()
    {
        return(
            <div>
                <div className="demo">
                    <div className='demo1'>
                      DEMO VIDEOS
                    </div>
                    <div className='row'>

                   
                     <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4'>
                        <div className='video'>
                            <video className='video1' controls>
                                <source src='zerozam_2.mp4' type="video/mp4"/>
                            </video>
                            <i className='demovideo offset-xl-3'>VIDEO ON USAGE - PARTNER</i>
                        </div>
                    </div>
                     <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4'>
                     <div className='video'>
                            <video className='video1' controls>
                            <source src="zerozam_2.mp4" type="video/mp4"/>
                            </video>
                            <i className='demovideo offset-xl-3'>VIDEO ON USAGE - Customers</i>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4'>
                    <div className='video'>
                            <video className='video1' controls>
                                <source src='zerozam_2.mp4' type="video/mp4"/>
                                
                            </video>
                            <i className='demovideo offset-xl-3'>VIDEO ON USAGE - Customers</i>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}