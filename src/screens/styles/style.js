import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    itemContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#ddddff',
        margin:15
    },

    text:{
        textAlign:'center',
        fontSize:40,
        color:'green'
    },

    itemtexto:{
        fontSize:20,
        color:'blue'
    },

    textInput:{
        height: 65, 
        width:150,
        maxWidth: 250,
        borderColor: 'green', 
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#ddebee',
        margin: 15,
        fontSize:25
    },

    button:{
        height: 40, 
        width:150,
        borderColor: 'blue', 
        borderRadius: 10,
        backgroundColor: '#8df',
        alignItems:'center',
        justifyContent:'center',
        margin: 15
    },

    textButton:{
        fontSize:25,
        color:'blue',
    }
});

export default styles;