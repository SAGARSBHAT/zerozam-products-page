import React,{Component} from 'react'

export default class Trail extends Component{
    render()
    {
        return(
        <div>
            <div className='trail'>
                <div className='trailtxt'>
                 <span className='trailtxt1'>Get started now. Free 15 days trial.Cancel any time.</span>
                </div>
                <div className='trailbtn'>
                  <button type='button' className='btn-lg btn-primary'>Sign-Up for Zerozam</button>
                </div>
                <div className='trailsmtxt'>
                    <span className='trailsmtxt1'>Ready to use in minutes</span>

                </div>
            </div>
        </div>
        )
    }
}