import axios from 'axios'

const URL = 'http://localhost:8080'

const cadastro = (nome, descricao,dataCadastro,imagem) =>{

    const url = `${URL}/produtos/novo`
    console.log("NOME API: "+nome);
    console.log("URL: "+url);
    
    
    
    return axios.post(url,{nome,descricao,dataCadastro,imagem}).then(response => response.data)
    
}
const editarProduto = (idProduto,nome, descricao,dataCadastro,imagem) =>{

    const url = `${URL}/produtos/novo`
    console.log("NOME API: "+nome);
    console.log("URL: "+url);
    
    
    
    return axios.post(url,{idProduto,nome,descricao,dataCadastro,imagem}).then(response => response.data)
    
}
const listarProdutos = ()=>{
    const url = `${URL}/produtos`
    return axios.get(url).then(response => response.data)
}

const listarProdutosPorNome = (nome)=>{
    const url = `${URL}/produtos/buscaNome/${nome}`
    return axios.get(url,nome).then(response => response.data)
}

const deletarProduto = (idProduto)=>{
    const url = `${URL}/produtos/${idProduto}`
    return axios.delete(url).then(response => response.data)
}
const buscarProdutoPorId = (idProduto)=>{
    const url = `${URL}/produtos/${idProduto}`
    return axios.get(url).then(response => response.data)
}

export{
    cadastro,
    listarProdutos,
    deletarProduto,
    buscarProdutoPorId,
    editarProduto,
    listarProdutosPorNome
}