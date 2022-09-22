
import Home from "./Home/Home"
import Menu from "./Menu/Menu"
import Test from "./Test";
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import style from "./Main.css"






const Main = () => {
  return (
    <View style={style.container}>
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