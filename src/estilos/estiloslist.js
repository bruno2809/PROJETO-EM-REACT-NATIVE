import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        width: '100%'
      },
      buttonContainer: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
      },
        button: {
          borderRadius: 10,
          marginVertical: 20,
          alignSelf: 'flex-start',
          backgroundColor: "green",
        },
        buttonText: {
          color: "white",
          paddingVertical: 6,
          paddingHorizontal: 10,
          fontSize: 16
        },
        title:{
          fontWeight: "bold",
          fontSize: 20,
          marginBottom: 20
        },
        name: {
          fontWeight: "bold",
          fontSize: 16
        },
        listItem: {
          fontSize: 16
        },

        clienteListContainer:{
            marginBottom: 25,
            elevation: 4,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 6,
            borderTopWidth: 1,
            borderColor: "rgba(0,0,0,0.1)",
            width: '100%'
        },

         FornecedorListContainer:{
            marginBottom: 25,
            elevation: 4,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 6,
            borderTopWidth: 1,
            borderColor: "rgba(0,0,0,0.1)",
            width: '100%'
        },

        funcionarioListContainer:{
            marginBottom: 25,
            elevation: 4,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 6,
            borderTopWidth: 1,
            borderColor: "rgba(0,0,0,0.1)",
            width: '100%'
        },

          produtoListContainer: {
          marginBottom: 25,
          elevation: 4,
          backgroundColor: "white",
          padding: 10,
          borderRadius: 6,
          borderTopWidth: 1,
          borderColor: "rgba(0,0,0,0.1)",
          width: '100%'
        },

})