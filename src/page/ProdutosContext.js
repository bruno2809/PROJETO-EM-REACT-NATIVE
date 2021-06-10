import React, {useState} from 'react'
import { Provider } from 'react-native-paper/lib/typescript/core/settings'


const ProdutosContext = React.createContext([{}, ()=> {} ])

const ProdutosProvider = (props) => {
    const produtosIni = {
        name: "",
        codigo: "",
        fornecedor: "",
        preco:""
    }

    const [produtos, setProdutos] = useState(ProdutosIni)
    return {
        <ProdutosContext.Provider value={[produtos, setProdutos]}>
        {props.children}

        </ProdutosContext.Provider>
    }
}
export {ProdutosContext, ProdutosProvider}