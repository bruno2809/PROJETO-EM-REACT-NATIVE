import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../../estilos/estilosadd'

const AddProduto = (props) => {
  const initialProdutoState = {
    name: "",
    codigo: "",
    fornecedor: "",
    preco:""
  }

  const [produto, setProduto] = useState(initialProdutoState)
  const { isOpen, closeModal } = props

  const handleChange = (value, name) => {
    setProduto( {...produto, [name]: value})
  }

  const addProduto = async () => {
    props.addProduto(produto) 
    props.closeModal();

  }

  return(
    <Modal
        visible={isOpen}
        onRequestClose={closeModal}
        animationType="slide"
    >
        <View style={styles.container}>
          <Text style={styles.title}>Cadastrar Produto </Text>
          <TextInput
            placeholder="Nome do Produto: "
            style={styles.textBox}
            onChangeText={(text) => handleChange(text, "name")}
          />

          <TextInput
            placeholder=" Código do Produto: "
            style={styles.textBox}
            onChangeText={(text) => handleChange(text, "codigo")}
            keyboardType="numeric"
          />

          <TextInput
            placeholder=" Fornecedor do Produto: "
            style={styles.textBox}
            onChangeText={(text) => handleChange(text, "fornecedor")}
            
          />

          <TextInput
            placeholder="Preco do Produto: "
            style={styles.textBox}
            onChangeText={(text) => handleChange(text, "preco")}
            keyboardType="numeric"
          />

          <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={addProduto}
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

export default AddProduto