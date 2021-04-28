import React, { useState } from 'react';
import styles from '../../estilos/estilosdelete';

import {  Modal,View,Text, StyleSheet, TouchableOpacity} from 'react-native';

const DeleteFuncionario = (props) => {

    const { isOpen, closeModal, selectedFuncionario } = props;

    const deleteFuncionario = () => {
      props.deleteFuncionario(props.selectedFuncionario.matricula);
      props.closeModal();
    }

    return (
        <Modal
            visible={isOpen}
            onRequestClose={closeModal}
            animationType="slide"
            transparent
        >
            <View style={styles.BackgroundContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>Deseja excluir o funcionário ({selectedFuncionario.matricula})?</Text>
                    <Text style={styles.subTitle}>Aperte o botão OK.</Text>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={deleteFuncionario}>
                            <Text style={styles.buttonText}>OK</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ marginLeft: 10 }}
                            onPress={closeModal}>
                            <Text style={{ ...styles.buttonText, color: "skyblue" }}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default DeleteFuncionario;