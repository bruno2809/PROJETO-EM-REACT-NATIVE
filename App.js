import * as React from 'react';
import { Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/page/home/HomeScreen'
import ListFuncionario from './src/page/Funcionarios/ListFuncionario'
import ListProduto from './src/page/Produtos/ListProduto'
import {FuncionarioProvider} from "./src/page/FuncionarioContext"
import {ProdutosProvider} from "./src/page/ProdutosContext"
const options = {
  headerLeft: () => (
    <TouchableOpacity onPress={navigation.openDrawer}>
      <Text style={{margin: 8}}>Esquerdo</Text>
    </TouchableOpacity>
    
  )
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen options={options} name="Home" component={HomeScreen} />
          <Drawer.Screen options={options} name="Funcionarios" component={ListFuncionario} />
          <Drawer.Screen options={options} name="Produtos" component={ListProduto} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
  
}