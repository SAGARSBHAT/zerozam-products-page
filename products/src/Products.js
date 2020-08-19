import React,{Component} from 'react'
import Demo from './Components/demo videos'
import Footer from './Components/Footer'
import Trail from './Components/freetrail'
import Iot from './Components/iot'
import Key from './Components/Key'
import Nav from './Components/Nav'
import Users from './Components/partner end users'
import Personalized from './Components/Personalized'
import Pic from './Components/Pic'
import Testimony from './Components/testimony'
import Req from './Components/Request'
import './Components/Product.css'
import IOT from './Components/iot'


export default class Products extends Component{
    render()
    {
        return(
            <div>
                <Nav/>
                <Pic/>
                <Key/>
                <Req/>
                <Personalized/>
                <IOT/>
                <Users/>
                <Demo/>
                <Testimony/>
                <Trail/>
                <Footer/>
            </div>
        )
    }
}