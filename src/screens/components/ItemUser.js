import { View, Text, Pressable, Alert, Modal, Button, TextInput } from "react-native";
import styles from "../styles/style";
import cadastro from "../../controllers/Cadastro";
import { useState } from "react";
import User from "../../models/User";


function ItemUser({itemUser}){
    
    const [uabout, setUabout ] = useState(itemUser.about);
    const [uname, setUname ] = useState(itemUser.name);

    const [isDelModalVisible, setDelModalVisible] = useState(false);
    const [isUpdModalVisible, setUpdModalVisible] = useState(false);

    function deletar(){
        
        cadastro.exclude(itemUser.id)
        .then((resp)=>{
            console.log(resp.msg);
            setDelModalVisible(false);
            Alert.alert('Recarregue a lista puxando para baixo.', resp.msg);
        });
    }

    function atualizar(){
        const user = new User(uname, itemUser.email, 'sehnaFalsa', uabout);

        cadastro.update(user, itemUser.id)
        .then((resp)=>{
            console.log(resp.msg);
            setUpdModalVisible(false);
            Alert.alert('Recarregue a lista puxando para baixo.', resp.msg);
        });
    }
    

    return(
        <View style={styles.itemContainer}>
            <Text style={styles.itemtexto}>Id:.......{itemUser.id}</Text>
            <Text style={styles.itemtexto}>Nome:.....{itemUser.name}</Text>
            <Text style={styles.itemtexto}>Email:....{itemUser.email}</Text>
            <Text style={styles.itemtexto}>About Me:.{itemUser.about}</Text>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isDelModalVisible}
                
            >
                <View style={styles.itemContainer}>
                    <Text style={styles.itemtexto}>Deletar {itemUser.name} - {itemUser.id}?</Text>
                    <Button title="Deletar" onPress={deletar} />
                    <Button title="Não Deletar" onPress={()=>setDelModalVisible(false)} />
                </View>
            </Modal>
            <Pressable onPress={()=>setDelModalVisible(true)}>
                <Text>DELETE</Text>
            </Pressable>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isUpdModalVisible}
                
            >
                <View style={styles.itemContainer}>
                    
                    <Text style={styles.itemtexto}>Atualizar {itemUser.name} - {itemUser.id}</Text>
                    
                    <TextInput 
                        placeholder="Name"
                        onChangeText={text=>{setUname(text)}}
                        value={uname}
                        style={styles.textInput}
                    />

                    <TextInput 
                        placeholder="About"
                        onChangeText={text=>{setUabout(text)}}
                        value={uabout}
                        style={styles.textInput}
                    />

                    <Button title="Atualizar FAKE" onPress={atualizar} />
                    <Button title="Cancelar" onPress={()=>setUpdModalVisible(false)} />
                </View>
            </Modal>

            <Pressable onPress={()=>setUpdModalVisible(true)}>
                <Text>ATUALIZAR</Text>
            </Pressable>
            
        </View>
    )
}

export default ItemUser;
