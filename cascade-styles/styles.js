import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    itemContainer:{
        flex:1,
        justifyContent:'center',
        backgroundColor: '#ddddff',
        margin:15
    },

    pressContainer:{
        backgroundColor:'#d6d6f6',
        alignItems:'center'
    },

    itemLabel:{
        flex:1,
        alignItems:'flex-start',
        textAlign:'left'
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
        width:350,
        maxWidth: 500,
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
    },

    connected:{
        color: 'blue'
    },
    disconnected:{
        backgroundColor: 'red',
        color: 'white'
    }
});

export default styles;