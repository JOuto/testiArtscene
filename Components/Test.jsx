import { StyleSheet, View,  Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Link} from "react-router-native";



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


const Test = () => {

    return (
        <View style={styles.container}>
            <Link to="/"><Text>Testi</Text></Link>
      
      <StatusBar style="auto" />
    
        </View>
    )
}

export default Test;