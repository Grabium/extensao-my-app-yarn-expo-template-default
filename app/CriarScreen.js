import React, {useState, useEffect} from "react";
import { View, Text,TextInput, Pressable } from "react-native";
import styles from '../cascade-styles/styles';
import cadastro from "../src/controllers/Cadastro";
import User from "../src/models/User";
import { Link } from "expo-router";
import { useNetInfo } from "@react-native-community/netinfo";
import { Keyboard } from "react-native";

export default function Criar(){

    const netInfo = useNetInfo();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [about, setAbout] = useState('')

    async function cadastrar(){

        Keyboard.dismiss();
        const user = new User(name, email, password, about);
        const valid   = user.validation();
        
        if(valid[0] == false){
            alert(valid[1]);
            return;
        }
        
        cadastro.register(user)
        .then((resp)=>{

            console.log(resp.msg);
            alert(resp.msg);
            setName('');
            setEmail('');
            setPassword('');
            setAbout('');
            setCadastrado(true);
        });
    }

    if(netInfo.isConnected === false){
        return (
            <View style={styles.container}>
                <Text style={styles.disconnected}>Conecte-se à uma rede</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            
            <Text style={styles.text}>Criar Novo Registro</Text>
            
            <TextInput 
                placeholder="Name"
                onChangeText={text=>{setName(text)}}
                value={name}
                style={styles.textInput}
            />

            <TextInput 
                placeholder="Email ex: abc@abc" 
                inputMode="email" 
                onChangeText={text=>{setEmail(text)}}
                value={email}
                style={styles.textInput}
            />

            <TextInput 
                placeholder="Password" 
                secureTextEntry={true} 
                onChangeText={text=>{setPassword(text)}}
                value={password}
                style={styles.textInput}
            />

            <TextInput 
                placeholder="About" 
                onChangeText={text=>{setAbout(text)}}
                value={about}
                style={styles.textInput}
            />

            <Pressable style={styles.button} onPress={()=>{cadastrar()}}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </Pressable>

            <Link href="/" asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>Retornar</Text>
                </Pressable>
            </Link>
        </View>
    )
}