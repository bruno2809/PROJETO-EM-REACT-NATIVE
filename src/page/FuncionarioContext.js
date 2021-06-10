import React, {useState} from 'react'
import { Provider } from 'react-native-paper/lib/typescript/core/settings'


const FuncionarioContext = React.createContext([{}, ()=> {} ])

const FuncionarioProvider = (props) => {
    const funcionarioIni = {
        name: "",
        matricula: "",
        cpf: "",
        telefone: "",
        endereco: ""
    }

    const [funcionario, setFuncionario] = useState(funcionarioIni)
    return {
        <FuncionarioContext.Provider value={[funcionario, setFuncionario]}>
        {props.children}

        </FuncionarioContext.Provider>
    }
}
export {FuncionarioContext, FuncionarioProvider}