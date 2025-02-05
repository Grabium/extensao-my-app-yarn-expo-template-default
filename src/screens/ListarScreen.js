import React, {useEffect, useState} from "react";
import { View, Text, FlatList, Alert } from "react-native";
import cadastro from "../controllers/Cadastro";
import ItemUser from "./components/ItemUser";
import styles from "./styles/style";

export default function Listar(){

    const [refreshing, setRefreshing] = useState(false);
    const [users, setUsers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    

    async function loadRegisters(){

        cadastro.list().then((resp)=>{
            
            console.log('Recebendo dados do back-end...');
            console.log(resp.msg);
            console.log('Quantidade de dados: '+resp.dataLen);
            console.log(resp.data);
            
            setUsers(resp.data);     
            setLoaded(true);
            
        });

    }

    useEffect(()=>{
        onRefresh();
    }, []);

    const onRefresh = async ()=>{

        setRefreshing(true);//efeito visual de carregamento
        await loadRegisters();
        setRefreshing(false);//para de girar.

        if(loaded == true){
            Alert.alert('Dados Carregados');
            setLoaded(false);
        }
    }

    return(
        <View style={styles.container}>

            <Text style={styles.text}>Lista de Registros</Text>

            <FlatList
                data={users}
                keyExtractor={(item,index) => String(item.id)}
                renderItem={({item}) => <ItemUser itemUser={item} />}
                refreshing={refreshing}
                onRefresh={onRefresh}
            />

            

            
        </View>
    )
}
