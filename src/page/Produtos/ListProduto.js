import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import AddProduto from './AddProduto'
import DeleteProduto from './DeleteProduto'
import EditarProduto from './EditarProduto'
import styles from '../../estilos/estiloslist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TabRouter } from '@react-navigation/routers';
import { TextInput } from 'react-native';

function ListProduto({}) {

  const [isAddProdutoModalOpen, setIsAddProdutoModalOpen] = useState(false)
  const [isDeleteProdutoModalOpen, setIsDeleteProdutoModalOpen] = useState(false)
  const [isEditarProdutoModalOpen, setIsEditarProdutoModalOpen] = useState(false)
  const [produto, setProduto] = useState([])
  const [selectedProduto, setSelectedProduto] = useState(false)


  const toggleAddProduto = () => {
    setIsAddProdutoModalOpen(!isAddProdutoModalOpen)
  }

  const addProduto = (data) => {
     setProduto([data, ...produto])
    
  }
  
  const updateProduto = (data) => {
    console.log(data)
    setProduto(produto.map(cli => cli.name == data.name ? data : cli) )
  }

  const deleteProduto = name => {
    setProduto(produto.filter(cli => cli.name !== name))
    
  }

  const toggleDeleteProdutoModal = () => {
    setIsDeleteProdutoModalOpen(!isDeleteProdutoModalOpen)
  }
  
  const toggleEditarProdutoModal = () => {
    setIsEditarProdutoModalOpen(!isEditarProdutoModalOpen)
  }
  useEffect(()=> {
    async function loadproduto(){
      const produtoStorage = await AsyncStorage.getItem('@Produto');
    
      if(produtoStorage){
        setProduto(JSON.parse(produtoStorage));
    
      }
    
    }
    
    loadproduto();
    
    }, []);
    
    useEffect(()=> {
    
    async function saveproduto(){
      await AsyncStorage.setItem('@Produto', JSON.stringify(produto));
    }
     saveproduto();
    
    } ,[produto]);
    
  return(
    <ScrollView>
      <View style={styles.container}>
          <Text style={styles.title}>Lista de produtos: </Text>
        
          <TouchableOpacity
            onPress={toggleAddProduto}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Adicionar produto</Text>
            </TouchableOpacity>          
            {produto.map((data, index) => 
              <View style={styles.produtoListContainer}key={index}>
                
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.listItem}>CODIGO: {data.codigo}</Text>
                <Text style={styles.listItem}>FORNECEDOR: {data.fornecedor}</Text>
                <Text style={styles.listItem}>PRECO: {data.preco}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      toggleEditarProdutoModal();
                      setSelectedProduto(data)
                    }}
                    style={{ ...styles.button, marginVertical: 0}}>
                    <Text style={styles.buttonText}>Editar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      toggleDeleteProdutoModal();
                      setSelectedProduto(data)
                    }}
                    style={{ ...styles.button, marginVertical: 0, marginLeft: 10, backgroundColor: "tomato" }}>
                    <Text style={styles.buttonText}>Delete</Text>
                  </TouchableOpacity>
                </View>

              </View>
            )}        

          {isAddProdutoModalOpen ? <AddProduto
            isOpen={isAddProdutoModalOpen}
            closeModal={toggleAddProduto}
            addProduto={addProduto}
          /> : null}

          {isEditarProdutoModalOpen ? <EditarProduto
            isOpen={isEditarProdutoModalOpen}
            closeModal={toggleEditarProdutoModal}
            selectedProduto={selectedProduto}
            updateProduto={updateProduto}
          /> : null}

          {isDeleteProdutoModalOpen ? <DeleteProduto
            isOpen={isDeleteProdutoModalOpen}
            closeModal={toggleDeleteProdutoModal}
            selectedProduto={selectedProduto}
            deleteProduto={deleteProduto}
          /> : null}



      </View>

    </ScrollView>
  )
 
}

export default ListProduto