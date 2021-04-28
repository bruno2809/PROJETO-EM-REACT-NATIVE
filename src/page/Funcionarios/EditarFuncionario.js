import React, { useState, useEffect } from 'react';
import styles from '../../estilos/estiloseditar';

import {
    Modal,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const EditarFuncionario = (props) => {
    const initialFuncionarioState = {
        name: "",
        matricula: "",
        cpf: "",
        telefone: "",
        endereco: ""
      };

    const [funcionario, setFuncionario] = useState(initialFuncionarioState);
    const { isOpen, closeModal } = props;

    useEffect(() => {
        
        const data = {
            name: props.selectedFuncionario.name,
            matricula: props.selectedFuncionario.matricula,
            cpf: props.selectedFuncionario.cpf,
            telefone: props.selectedFuncionario.telefone,
            endereco: props.selectedFuncionario.endereco
          };
        setFuncionario(data)
    }, [])

    const handleChange = (value, matricula) => {
        setFuncionario({ ...funcionario, [matricula]: value });
    }

    const updateFuncionario = () => {
        
        props.updateFuncionario({
            name: funcionario.name,
            matricula: funcionario.matricula,
            cpf: funcionario.cpf,
            telefone: funcionario.telefone,
            endereco: funcionario.endereco
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
                <Text style={styles.title}>Editar funcionário</Text>

                <TextInput
                  placeholder="Digite o nome do funcionário: "
                  style={styles.textBox}
                  value={funcionario.name}
                  onChangeText={(text) => handleChange(text, "name")}
                />

                <TextInput
                  placeholder="Digite a matrícula do funcionário: "
                  style={styles.textBox}
                  value={funcionario.matricula}
                  onChangeText={(text) => handleChange(text, "matricula")}
                  keyboardType="numeric"
                />

                <TextInput
                  placeholder="Digite o cpf do funcionário: "
                  style={styles.textBox}
                  value={funcionario.cpf}
                  onChangeText={(text) => handleChange(text, "cpf")}
                  keyboardType="numeric"
                />

                <TextInput
                  placeholder="Digite o telefone do funcionário: "
                  style={styles.textBox}
                  value={funcionario.telefone}
                  onChangeText={(text) => handleChange(text, "telefone")}
                  keyboardType="numeric"
                />

                <TextInput
                  placeholder="Digite o endereço do funcionário: "
                  style={styles.textBox}
                  value={funcionario.endereco}
                  onChangeText={(text) => handleChange(text, "endereco")}
                  keyboardType="numeric"
                />
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={updateFuncionario}
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

export default EditarFuncionario;