import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import AddFuncionario from './AddFuncionario'
import DeleteFuncionario from './DeleteFuncionario'
import EditarFuncionario from './EditarFuncionario'
import styles from '../../estilos/estiloslist';
import AsyncStorage from '@react-native-async-storage/async-storage';
function ListFuncionario({}) {

  const [isAddFuncionarioModalOpen, setIsAddFuncionarioModalOpen] = useState(false)
  const [isDeleteFuncionarioModalOpen, setIsDeleteFuncionarioModalOpen] = useState(false)
  const [isEditarFuncionarioModalOpen, setIsEditarFuncionarioModalOpen] = useState(false)
  const [funcionario, setFuncionario] = useState([])
  const [selectedFuncionario, setSelectedFuncionario] = useState(false)


  const toggleAddFuncionario = () => {
    setIsAddFuncionarioModalOpen(!isAddFuncionarioModalOpen)
  }

  const addFuncionario = (data) => {
    setFuncionario([data, ...funcionario])
    
  }

  const updateFuncionario = (data) => {
    console.log(data)
    setFuncionario(funcionario.map(func => func.matricula == data.matricula ? data : func) )
  }

  const deleteFuncionario = matricula => {
    setFuncionario(funcionario.filter(func => func.matricula !== matricula))
    
  }

  const toggleDeleteFuncionarioModal = () => {
    setIsDeleteFuncionarioModalOpen(!isDeleteFuncionarioModalOpen)
  }
  
  const toggleEditarFuncionarioModal = () => {
    setIsEditarFuncionarioModalOpen(!isEditarFuncionarioModalOpen)
  }
  useEffect(()=> {
    async function loadfuncionario(){
      const funcionarioStorage = await AsyncStorage.getItem('@Funcionario');
    
      if(funcionarioStorage){
        setFuncionario(JSON.parse(funcionarioStorage));
    
      }
    
    }
    
    loadfuncionario();
    
    }, []);
    
    useEffect(()=> {
    
    async function savefuncionario(){
      await AsyncStorage.setItem('@Funcionario', JSON.stringify(funcionario));
    }
     savefuncionario();
    
    } ,[funcionario]);

  return(
    <ScrollView>
      <View style={styles.container}>
          <Text style={styles.title}>Lista de Funcionários: </Text>

          <TouchableOpacity
            onPress={toggleAddFuncionario}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Adicionar Promotor</Text>
            
            </TouchableOpacity>          
            {funcionario.map((data, index) => 
              <View style={styles.funcionarioListContainer}key={index}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.listItem}>CODIGO DE MATRICULA: {data.matricula}</Text>
                <Text style={styles.listItem}>CPF: {data.cpf}</Text>
                <Text style={styles.listItem}>TELEFONE: {data.telefone}</Text>
                <Text style={styles.listItem}>ENDEREÇO: {data.endereco}</Text>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      toggleEditarFuncionarioModal();
                      setSelectedFuncionario(data)
                    }}
                    style={{ ...styles.button, marginVertical: 0 }}>
                    <Text style={styles.buttonText}>Editar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      toggleDeleteFuncionarioModal();
                      setSelectedFuncionario(data)
                    }}
                    style={{ ...styles.button, marginVertical: 0, marginLeft: 10, backgroundColor: "tomato" }}>
                    <Text style={styles.buttonText}>Delete</Text>
                  </TouchableOpacity>
                </View>

              </View>
            )}        

          {isAddFuncionarioModalOpen ? <AddFuncionario
            isOpen={isAddFuncionarioModalOpen}
            closeModal={toggleAddFuncionario}
            addFuncionario={addFuncionario}
          /> : null}

          {isEditarFuncionarioModalOpen ? <EditarFuncionario
            isOpen={isEditarFuncionarioModalOpen}
            closeModal={toggleEditarFuncionarioModal}
            selectedFuncionario={selectedFuncionario}
            updateFuncionario={updateFuncionario}
          /> : null}

          {isDeleteFuncionarioModalOpen ? <DeleteFuncionario
            isOpen={isDeleteFuncionarioModalOpen}
            closeModal={toggleDeleteFuncionarioModal}
            selectedFuncionario={selectedFuncionario}
            deleteFuncionario={deleteFuncionario}
          /> : null}



      </View>

    </ScrollView>
  )
}

export default ListFuncionario