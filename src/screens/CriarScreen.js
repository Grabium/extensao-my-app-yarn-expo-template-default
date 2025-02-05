import React, {useState} from "react";
import { View, Text,TextInput, Pressable } from "react-native";
import styles from "./styles/style";
import cadastro from "../controllers/Cadastro";
import User from "../models/User";

export default function Criar(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [about, setAbout] = useState('')

    function cadastrar(){

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
        });

        
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

            <Pressable style={styles.button} onPress={cadastrar}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </Pressable>
        </View>
    )
}