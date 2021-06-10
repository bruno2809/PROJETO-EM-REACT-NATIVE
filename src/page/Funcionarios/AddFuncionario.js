import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../../estilos/estilosadd'
import FuncionarioService from '../../../services/FuncionarioService'
import {FuncionarioContext} from "../FuncionarioContext"

const AddFuncionario = (props) => {
  const initialFuncionarioState = { name: "", matricula: "", cpf: "", telefone: "",endereco: ""
  }

  const [funcionario, setFuncionario] = useState(initialFuncionarioState)
  const { isOpen, closeModal } = props
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (value, matricula) => {
    setFuncionario( {...funcionario, [matricula]: value})
  }

  const addFuncionario = async () => {
    //API
    const data = {
      name: funcionario.name, 
      matricula: funcionario.matricula, 
      cpf: funcionario.cpf, 
      telefone: funcionario.telefone,
      endereco: funcionario.endereco
    }
    FuncionarioService.create(data)
            .then( res => {
              props.addFuncionario({
                   name: res.data.name, 
                   matricula: res.data.matricula, 
                   cpf: res.data.cpf, 
                   telefone: res.data.telefone,
                   endereco: res.data.endereco,
                   id: res.data.id
              })
              props.closeModal();
            })
            .catch( err=>{
              setErrorMessage("Erro a se conectar com API. ")
            })

  }

  return(
    <Modal
        visible={isOpen}
        onRequestClose={closeModal}
        animationType="slide"
    >
        <View style={styles.container}>
          
          <Text style={styles.title}>Adicionar Promotor </Text>
          <TextInput
            placeholder="Digite o Nome: "
            style={styles.textBox}
            onChangeText={(text) => handleChange(text, "name")}
          />

          <TextInput
            placeholder="Digite o Codigo: "
            style={styles.textBox}
            onChangeText={(text) => handleChange(text, "matricula")}
            keyboardType="numeric"
          />

          <TextInput
            placeholder="Digite o CPF: "
            style={styles.textBox}
            onChangeText={(text) => handleChange(text, "cpf")}
            keyboardType="numeric"
          />

        <TextInput
            placeholder="Número de Telefone: "
            style={styles.textBox}
            onChangeText={(text) => handleChange(text, "telefone")}
            keyboardType="numeric"
          />

        <TextInput
            placeholder="Digite o Endereço: "
            style={styles.textBox}
            onChangeText={(text) => handleChange(text, "endereco")}
          />
           
          <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={addFuncionario}
            style={{...styles.button, marginVertical: 0}}
            >
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={closeModal}
            style={{...styles.button, marginVertical: 0, marginLeft: 10, backgroundColor: "tomato"}}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>

        </View>
    </Modal>
  )
}

export default AddFuncionario