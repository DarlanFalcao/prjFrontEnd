import React,{Component} from 'react'
import {Col} from 'reactstrap'

class HomeComponent extends Component{
    constructor(props){
        super(props)
        this.state = {isOpen : false}
        this.toggleNavbar = this.toggleNavbar.bind(this)
    }
toggleNavbar(){
  return this.setState({
     isOpen:!this.state.isOpen
  })  
}

render(){
    
    return(
        <Col>
        <h1>Lista de Produtos</h1>
        </Col>
    )
}
}

export default HomeComponent