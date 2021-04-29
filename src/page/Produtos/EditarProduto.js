import React, { useState, useEffect } from 'react';
import styles from '../../estilos/estiloseditar';

import { Modal, View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native';

const EditarProduto = (props) => {
    const initialProdutoState = { name: "",codigo: "",fornecedor: "", preco:""  };

    const [produto, setProduto] = useState(initialProdutoState);
    const { isOpen, closeModal } = props;

    useEffect(() => {
        
        const data = {
            name: props.selectedProduto.name,
            codigo: props.selectedProduto.codigo,
            fornecedor: props.selectedProduto.fornecedor,
            preco: props.selectedProduto.preco
          };
        setProduto(data)
    }, [])

    const handleChange = (value, name) => {
        setProduto({ ...produto, [name]: value });
    }

    const updateProduto = () => {
        
        props.updateProduto({
            name: produto.name,
            codigo: produto.codigo,
            fornecedor: produto.fornecedor,
            preco: produto.preco
        });
        props.closeModal();
    }

    return (
        <Modal
            visible={isOpen}
            onRequestClose={closeModal}
            animationType="slide"
        >
            <View style={styles.container}>
                <Text style={styles.title}>Editar produto</Text>

                <TextInput
                  placeholder="Digite o nome: "
                  style={styles.textBox}
                  value={produto.name}
                  onChangeText={(text) => handleChange(text, "name")}
                />

                <TextInput
                  placeholder="Digite o codigo: "
                  style={styles.textBox}
                  value={produto.codigo}
                  onChangeText={(text) => handleChange(text, "codigo")}
                  keyboardType="numeric"
                />

                <TextInput
                  placeholder="Digite o fornecedor: "
                  style={styles.textBox}
                  value={produto.fornecedor}
                  onChangeText={(text) => handleChange(text, "fornecedor")}
                  keyboardType="numeric"
                />

                <TextInput
                  placeholder="Digite o preco: "
                  style={styles.textBox}
                  value={produto.preco}
                  onChangeText={(text) => handleChange(text, "preco")}
                  keyboardType="numeric"
                />
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={updateProduto}
                        style={{ ...styles.button, marginVertical: 0 }}>
                        <Text style={styles.buttonText}>Atualizar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={closeModal}
                        style={{ ...styles.button, marginVertical: 0, marginLeft: 10, backgroundColor: "tomato" }}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    );
    
}

export default EditarProduto;