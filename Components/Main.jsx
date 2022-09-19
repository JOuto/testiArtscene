
import Home from "./Home/Home"
import Menu from "./Menu/Menu"
import Test from "./Test";
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: 100
    },
  });




const Main = () => {
  return (
    <View style={styles.container}>
     <Menu/>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;