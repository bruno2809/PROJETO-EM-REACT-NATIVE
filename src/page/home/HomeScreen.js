import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet,Button,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  const navigate = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
         
        <StatusBar
          animated={true}
          />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Menu </Text>
            <Text/>  
            <Button
            onPress={() => navigation.navigate('Funcionarios')}
            title="Lista de Funcionarios"
            />
            <Text/>
             <Button
             onPress={() => navigation.navigate('Produtos')}
            title="Lista de Protudos"
            
            />
            
          </View>
          </SafeAreaView>
          
    );
    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ECF0F1'
    }})
    
  export default HomeScreen
