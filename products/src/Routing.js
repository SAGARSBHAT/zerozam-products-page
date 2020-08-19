import React,{Component} from 'react'
import Product from './Products'
import {BrowserRouter,Route} from 'react-router-dom'

export default class Routing extends Component{
    render()
    {
        return(
            <BrowserRouter>
                <div>
                <Route exact path='/' component={Product}></Route>  
                </div>
            </BrowserRouter>
        )
    }
}