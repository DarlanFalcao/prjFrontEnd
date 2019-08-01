import React,{Component} from 'react'
import {Col,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import {cadastro} from './ProdutoAPI'
class ProdutoCadastro extends Component{

    constructor(props){ 
        super(props)
        //String nome, String descricao, Date dataCadastro, String imagem
        this.state = {nome :'',descricao:'',dataCadastro:'',imagem:''}
        this.salvarProduto = this.salvarProduto.bind(this)
        this.nomeProduto = this.nomeProduto.bind(this)
        this.descricaoProduto = this.descricaoProduto.bind(this)
        this.dataCadastroProduto = this.dataCadastroProduto.bind(this)
        this.imgProduto = this.imgProduto.bind(this)
        this.isEditar  = false
       
    }

   

    nomeProduto(e){
        
        return this.setState({
            nome:e.target.value
        })
    }
    descricaoProduto(e){
        console.log("Valor descricao: "+e.target.value);
        return this.setState({
            descricao:e.target.value
            })
    }
dataCadastroProduto(e){
        return this.setState({
            dataCadastro:e.target.value
            })
    }
    imgProduto(e){
        return this.setState({
            imagem:e.target.value
            })
    }

    salvarProduto(){
    let {nome,descricao,dataCadastro,imagem} = this.state
    console.log("DESCRICAO METODO SALVAR: "+descricao);
    
    cadastro(nome, descricao,dataCadastro,imagem).then(()=>{
        this.props.history.push('/produtos')
    })
    }
render(){
    console.log("CADASTRO");
    
    return(
<Col>
<Form>
    <FormGroup>
        <Label>Nome:</Label>
        <Input type="text" name ="nome" placeholder ="Nome do Produto" onChange = {this.nomeProduto}></Input>
    </FormGroup>
    <FormGroup>
        <Label>Descrição:</Label>
        <Input type="text" name ="descricao" placeholder ="Descrição do Produto" onChange = {this.descricaoProduto}></Input>
    </FormGroup>
    <FormGroup>
        <Label>Data do Cadastro:</Label>
        <Input type="date" name ="dataCadastro" placeholder ="Data de Cadastro do Produto" onChange = {this.dataCadastroProduto}></Input>
    </FormGroup>
    
    <FormGroup>
        <Label>Imagem:</Label>
        <Input type="file" name="imagem" onChange={this.imgProduto}></Input>
    </FormGroup>
    <FormGroup>
        <Button color="primary" onClick={this.salvarProduto}>Cadastrar</Button>
        </FormGroup>
    </Form>
</Col>
    )
}

}
export default ProdutoCadastro