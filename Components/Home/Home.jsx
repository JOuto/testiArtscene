import { StyleSheet, View,  Text, Pressable, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from "react";
import { Navigate, Link } from 'react-router-native';
import axios  from 'axios';
//import style from './homeStyle';
import styles from "./Home.css"
import Map from "../Map/Map";



/* const styles = StyleSheet.create({
    container: {
      flex: 1,
      overFlow: "scroll",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }); */


const Home = () => {

  const [users, setUsers] = useState();

useEffect(() => {
  const fetchUsers = async () => {
    const users = await axios.get("https://www.artscene.fi/api/users/galleries");
    console.log(users.data);
    console.log("moro")
    
    setUsers(users.data);
    
    }
fetchUsers();
  
},[])

    return (
        <View style={styles.container}>
          <Map/> 
      <Text /* style={styles.container} */>Morooooooooooooo!</Text>
      <Link to="/test"><Text>Testi</Text></Link>
      <ScrollView>
      {users && users.map((u,i) => <Text key={i}>{u.name}</Text>)}
      </ScrollView>
      {/* <Pressable onPress={() => <Navigate to="/test" />}><Text>Testi</Text></Pressable> */}
      {/* <StatusBar style="auto" /> */}
    
        </View>
    )
}

export default Home;