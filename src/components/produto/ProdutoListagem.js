import React ,{Component} from 'react'
import {Col,Table,Button,Form} from 'reactstrap'
import {listarProdutos,deletarProduto,buscarProdutoPorId,listarProdutosPorNome} from './ProdutoAPI'
import * as moment from 'moment';


class ProdutoListagem extends Component{

   constructor(props){
     super(props)
     this.state = {produtos:[]}
     this.deletarProduto = this.deletarProduto.bind(this)
    this.editarProduto = this.editarProduto.bind(this)
    this.buscarProdutos = this.buscarProdutos.bind(this)
    this.paramBusca = {nomeBusca:''} 
    this.nomeBusca = this.nomeBusca.bind(this)   
    }

componentDidMount(){
listarProdutos().then(data => this.setState({produtos:data}))
}
deletarProduto(produtos){
deletarProduto(produtos.idProduto).then(()=>{
    return listarProdutos().then(data => this.setState({produtos:data}))
})
}
editarProduto(produtos){
        this.props.history.push(`/produtos/editar/${produtos.idProduto}`)
    }
buscarProdutos(nome){
    listarProdutosPorNome(this.paramBusca.nome).then(()=>{ 
   return listarProdutosPorNome(this.paramBusca.nome).then(data => this.setState({produtos:data}))
})
}

nomeBusca(e){
    paramBusca:e.target.value
}

render(){
    let {produtos} = this.state
   
    return(

        <div>
        <h1>Lista de Produtos</h1>
           
        <Col  xs ="12" sm="12" md ="12">
        <Table >
        
        <thead>
        <tr>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Data de Cadastro</th>
        <th>Imagem</th>
        </tr>
        </thead>
        <tbody>
            {produtos.map((produtos,index)=>(
            <tr>
              <td>{produtos.nome}</td>
              <td>{produtos.descricao}</td>
              <td>{moment(produtos.dataCadastro).format('DD/MM/YYYY')}</td>
              <td> <img src ={produtos.imagem} width="100" height = "100"></img></td> 
              <td><Button color="primary" onClick ={()=>this.editarProduto(produtos)}>Editar</Button></td>
              <td><Button color="primary" onClick ={()=>this.deletarProduto(produtos)}>Deletar</Button></td>
               </tr>
            ))}
            
        </tbody>
        </Table>
        </Col>
</div>
    )
}

}
export default ProdutoListagem