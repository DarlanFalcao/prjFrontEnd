import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import HomeComponent from './components/home/HomeComponent'
import HeaderComponent from './components/header/HeaderComponent'
import {Container, Row} from 'reactstrap'
import ProdutoCadastro from './components/produto/ProdutoCadastro'
import ProdutoListagem from './components/produto/ProdutoListagem'
import ProdutoEditar from './components/produto/ProdutoEditar'
import ProdutoListagemLogin from './components/produto/ProdutoListagemLogin';


class App extends Component {
  
  constructor(props){
  super(props)

  }
   
  render() {
    return (
      
      <main>
      <HeaderComponent></HeaderComponent>
      <Router>
        <Container>
          <Row>       
          <Route exact path="/produtos" component={ProdutoListagem}/>
          <Route path="/produtos/novo" component={ProdutoCadastro}/>
          <Route path="/produtos/editar/:idProduto" component={ProdutoEditar}/>
          </Row>
          </Container>
        </Router>
        </main>
    )
  }
}

export default App;
