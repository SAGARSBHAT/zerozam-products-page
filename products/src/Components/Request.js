import React,{Component} from 'react'

export default class Req extends Component
{
    render()
    {
        return(
            <div>
                <div className='request'>
                    <div className='req'>
                    Request more info about our advanced queue management system
                    </div>
                    <div className='reqbtn'>
                        <button type='button' className='btn-lg btn-primary'>
                        <span classname='btntxt'>Request More Info</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}