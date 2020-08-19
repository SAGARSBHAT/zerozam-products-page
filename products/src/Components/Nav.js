import React,{Component} from 'react'
import {Link} from 'react-router-dom'



export default class Nav extends Component{
    render()
    {
        return(
        <div>
            <div className='d-none d-lg-block'>
            <nav className='navbar navbar-expand-lg bg-primary navbar-dark'>
                <div className='container-fluid'>
                <ul className='navbar-nav'>
                    <span className='nav-item active navig'><span className='col-lg-3'>For any query Contact: <i className='fas fa-phone-square-alt'> +91 9916235698 | info@zerozam.com</i></span></span>
                </ul>
                </div>
                <ul className='navbar-nav navbar-right'>
                    <span className='nav-item active navig navig1'><span>Want to join Virtual Queue? <span style={{fontWeight:700}}>Become Member</span></span></span>
                </ul>
            </nav>
            </div>
            <div className='img'> 
                <nav className='navbar navbar-expand-lg  navbar-light'> 
                 <div className="container-fluid">
                 
                     <div className='navbar-header'>
                         <button type='button' className='navbar-toggler' data-toggle='collapse' data-target='#mynavbar'>
                             <span className='navbar-toggler-icon'></span>
                         </button>
                     <span className='navbar-brand offset-xl-7'><img src={require('./Logos.png')} height='67px' width='167px'/></span>
                     </div>
                   
                    <ul className='navbar-nav navig'>
                        <div className='collapse navbar-collapse' id='mynavbar'>
                        <li className='nav-item active' style={{marginRight:'49px'}} ><Link className='nav-link'>Home</Link></li>
                        <li className='nav-item active'  style={{marginRight:'49px'}}><Link className='nav-link'>Covid-19 Queing</Link></li>
                        <li className='nav-item active'  style={{marginRight:'49px'}}><Link className='nav-link'>Products</Link></li>
                        <li className='nav-item active'  style={{marginRight:'86px'}}><Link className='nav-link'>Company</Link></li>
                        </div>
                  
                     <li className='nav-item active'><button className='btn btn-primary' style={{marginRight:'20px'}}>Try For Free</button></li>
                        <li className='nav-item active'><button className='btn btn-outline-dark'>Login</button></li>
                    </ul>
             
               
               </div>
                </nav>
           </div>
        </div>
        )
    }
}