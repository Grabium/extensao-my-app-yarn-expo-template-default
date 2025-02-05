import { useNetInfo } from '@react-native-community/netinfo';
import styles from '../cascade-styles/styles';
import React, {useEffect, useState} from "react";
import { View, Text, FlatList, Alert } from "react-native";
import cadastro from '../src/controllers/Cadastro';
import ItemUser from "./ItemUser";

export default function App(){

  const netInfo = useNetInfo();//{type, isConnected}

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
      {netInfo.isConnected ? <Text style={styles.connected}>Conectado: {netInfo.type}</Text> : <Text style={styles.disconnected}>Conecte-se à uma rede</Text>}
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
