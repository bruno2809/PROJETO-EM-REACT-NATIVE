import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../../estilos/estilosadd'

const AddFuncionario = (props) => {
  const initialFuncionarioState = {
    name: "",
    matricula: "",
    cpf: "",
    telefone: "",
    endereco: ""
  }

  const [funcionario, setFuncionario] = useState(initialFuncionarioState)
  const { isOpen, closeModal } = props

  const handleChange = (value, matricula) => {
    setFuncionario( {...funcionario, [matricula]: value})
  }

  const addFuncionario = async () => {
    props.addFuncionario(funcionario) 
    props.closeModal();

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