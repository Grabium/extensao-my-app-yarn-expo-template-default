import { View, Text, Pressable, Alert, Modal, TextInput, Keyboard } from "react-native";
import styles from '../styles';
import cadastro from "../src/controllers/Cadastro";
import { useState } from "react";
import User from "../src/models/User";


function ItemUser({itemUser}){
    
    const [uabout, setUabout ] = useState(itemUser.about);
    const [uname, setUname ] = useState(itemUser.name);

    const [isDelModalVisible, setDelModalVisible] = useState(false);
    const [isUpdModalVisible, setUpdModalVisible] = useState(false);

    function deletar(){
        Keyboard.dismiss();
        
        cadastro.exclude(itemUser.id)
        .then((resp)=>{
            console.log(resp.msg);
            setDelModalVisible(false);
            Alert.alert('Recarregue a lista puxando para baixo.', resp.msg);
        });
    }

    function atualizar(){
        Keyboard.dismiss();
        const user = new User(uname, uabout);
        const valid   = user.validateRequiredsUpdate();
        
        if(valid[0] == false){
            alert(valid[1]);
            return;
        }

        cadastro.update(user, itemUser.id)
        .then((resp)=>{
            console.log(resp.msg);
            setUpdModalVisible(false);
            Alert.alert('Recarregue a lista puxando para baixo.', resp.msg);
        });
    }
    

    return(
        <View style={styles.itemContainer}>
            <View style={styles.itemLabel}>
                <Text style={styles.itemtexto}>Id:.............{itemUser.id}</Text>
                <Text style={styles.itemtexto}>Nome:.....{itemUser.name}</Text>
                <Text style={styles.itemtexto}>Email:......{itemUser.email}</Text>
                <Text style={styles.itemtexto}>Sobre:.....{itemUser.about}</Text>
            </View>

            <View style={styles.pressContainer}>
                <Pressable style={styles.button} onPress={()=>setDelModalVisible(true)}>
                    <Text style={styles.textButton}>DELETE</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={()=>setUpdModalVisible(true)}>
                    <Text style={styles.textButton}>ATUALIZAR</Text>
                </Pressable>
            </View>
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={isDelModalVisible}
                style={styles.modalBackGround}
                
            >
                <View style={styles.modalBackGround}>
                    <Text style={styles.itemtexto}>Deletar {itemUser.name} - {itemUser.id}?</Text>
                    
                    <View style={styles.pressContainer}>
                        <Pressable style={styles.button} onPress={deletar}>
                            <Text style={styles.textButton}>Deletar</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={()=>setDelModalVisible(false)}>
                            <Text style={styles.textButton}>NÃO Deletar</Text>
                        </Pressable>
                    </View>

                </View>
            </Modal>           

            <Modal
                animationType="slide"
                transparent={true}
                visible={isUpdModalVisible}
                
            >
                <View style={styles.modalBackGround}>
                    
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
                    
                    <View style={styles.pressContainer}>
                        <Pressable style={styles.button} onPress={()=>{atualizar()}} >
                            <Text style={styles.textButton}>Atualizar</Text>
                        </Pressable>

                        <Pressable style={styles.button} onPress={()=>setUpdModalVisible(false)} >
                            <Text style={styles.textButton}>Cancelar</Text>
                        </Pressable>
                    </View>

                </View>
            </Modal>

            
            
        </View>
    )
}

export default ItemUser;
