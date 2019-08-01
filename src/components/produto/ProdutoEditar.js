import React,{Component} from 'react'
import {Col,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import {editarProduto,buscarProdutoPorId} from './ProdutoAPI'
import Moment from 'react-moment';
import * as moment from 'moment';


class ProdutoEditar extends Component{

    constructor(props){ 
        super(props)
       
        this.state =  {nome :'',descricao:'',dataCadastro:'',imagem:''} 
        this.salvarProduto = this.salvarProduto.bind(this)
        this.nomeProduto = this.nomeProduto.bind(this)
        this.descricaoProduto = this.descricaoProduto.bind(this)
        this.dataCadastroProduto = this.dataCadastroProduto.bind(this)
        this.imgProduto = this.imgProduto.bind(this)
        this.isEditar  = false
        this.produto = {produto:{}}
        console.log("CONSTRUTOR");
        
        
       
    }
   
    componentDidMount(){   
        let{idProduto} = this.props.match.params
        console.log("IDPARAM: "+idProduto);
        buscarProdutoPorId(idProduto).then(data =>
            this.setState({nome:data.nome,
                   descricao:data.descricao,
                   dataCadastro:moment(data.dataCadastro).format('YYYY-MM-DD'),
                   imagem:data.imagem})) 
               }
    nomeProduto(e){
        return  this.setState({
               nome:e.target.value,
        })       
    }
    descricaoProduto(e){
        return this.setState({
             descricao:e.target.value,
         })
    }
dataCadastroProduto(e){
    return this.setState({
         dataCadastro:moment(e.target.value).format('YYYY-MM-DD')
     })
    }
    imgProduto(e){
        return this.setState({
         imagem:e.target.value    
         })   
        }

    salvarProduto(){
        
    this.produto = this.state
    let{idProduto} = this.props.match.params
    
    editarProduto(idProduto,this.produto.nome, 
        this.produto.descricao,
        this.produto.dataCadastro,
        this.produto.imagem).then(()=>{
        this.props.history.push('/produtos')
    })
    }
render(){
    console.log("METODO RENDER");
    console.log("METODO RENDER NOME STATE: "+this.state.nome);
    //console.log("METODO RENDER ANTES: "+produto.nome);
    
    console.log("METODO RENDER STATE DEPOIS: "+this.state.nome);
    var dtCadastro =  moment(this.state.dataCadastro).format('YYYY-MM-DD')
    console.log("DATA: "+dtCadastro);
    //this.setState({descricao:moment(this.state.dataCadastro).format('YYYY-MM-DD')})

    
    return(
<Col>
<Form >
    <FormGroup>
        <Label>Nome:</Label>
        <Input type="text" name ="nome" value={this.state.nome} placeholder ="Nome do Produto" onChange = {this.nomeProduto}></Input>
    </FormGroup>
    <FormGroup>
        <Label>Descrição:</Label>
        <Input type="text" name ="descricao" value={this.state.descricao} placeholder ="Descrição do Produto" onChange = {this.descricaoProduto}></Input>
    </FormGroup>
    <FormGroup>
        <Label>Data do Cadastro:</Label>
        <Input type="date" name = "dataCadastro"
        value={this.state.dataCadastro} 
        placeholder ="Data de Cadastro do Produto" 
        onChange = {this.dataCadastroProduto}></Input>
    </FormGroup>
    <FormGroup>
        <Label>Imagem:</Label>
        <Input type="text" name ="imagem" value={this.state.imagem} placeholder ="Imagem do Produto" onChange = {this.imgProduto}></Input>
    </FormGroup>
    <FormGroup>
        <Button color="primary" onClick={this.salvarProduto}>Salvar</Button>
        </FormGroup>
    </Form>
</Col>
    )
}

}
export default ProdutoEditar