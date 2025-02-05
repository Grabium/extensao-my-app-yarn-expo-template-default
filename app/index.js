import { useNetInfo } from '@react-native-community/netinfo';
import styles from '../cascade-styles/styles';
import React, {useEffect, useState} from "react";
import { View, Text, FlatList, Alert, Pressable } from "react-native";
import cadastro from '../src/controllers/Cadastro';
import ItemUser from "./ItemUser";
import { Link, useRouter } from 'expo-router';

export default function App(){

  const netInfo = useNetInfo();//{type, isConnected}
  const router  = useRouter();

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

  if(netInfo.isConnected === false){
    Alert.alert('Reconecte-se, por favor.')
  }

  return(
    <View style={styles.container}>
      {netInfo.isConnected ? <Text style={styles.connected}>Conectado: {netInfo.type}</Text> : <Text style={styles.disconnected}>Conecte-se à uma rede</Text>}
      <Text style={styles.text}>Lista de Registros</Text>

      <Link href="/CriarScreen" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Novo</Text>
        </Pressable>
      </Link>

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
