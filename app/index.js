import { Text, View } from "react-native";
import { useNetInfo } from '@react-native-community/netinfo';
import styles from '../cascade-styles/styles';



export default function Index() {

  const netInfo = useNetInfo();
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>Type: {netInfo.type}</Text>
      <Text style={styles.text}>Is Connected? {netInfo.isConnected?.toString()}</Text>
    </View>
  );
}
