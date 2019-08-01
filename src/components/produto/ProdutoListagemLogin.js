import React ,{Component} from 'react'
import {Col,Table,Button} from 'reactstrap'
import {listarProdutos,deletarProduto,buscarProdutoPorId} from './ProdutoAPI'
import * as moment from 'moment';

class ProdutoListagemLogin extends Component{

   constructor(props){
     super(props)
     this.state = {produtos:[]}
     this.deletarProduto = this.deletarProduto.bind(this)
    this.editarProduto = this.editarProduto.bind(this)
    
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
render(){
    let {produtos} = this.state
   
    return(

        <div>
            
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
              <td>{produtos.imagem}</td>  
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
export default ProdutoListagemLogin