import React, { useState } from 'react';
import styles from '../../estilos/estilosdelete';

import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const DeleteProduto = (props) => {

    const { isOpen, closeModal, selectedProduto } = props;

    const deleteProduto = () => {
      props.deleteProduto(props.selectedProduto.name);
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
                    <Text style={styles.title}>Deseja excluir o produto ?</Text>
                    <Text style={styles.subTitle}>Se deseja excluir o produto aperte o botão OK.</Text>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={deleteProduto}>
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

export default DeleteProduto;