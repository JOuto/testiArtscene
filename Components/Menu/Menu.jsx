import React, { useEffect, useState } from "react";
import {Pressable, View, Text} from "react-native";
import style from "./Menu.css";
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";


const Menu = () => {


    return (
        <>
       
      
       
        <LinearGradient
        colors={["#77df8e", "#fbf4fd"]} 
        start={[0, 1]} end={[1, 0]}
        style={style.mobileUpperMenu}
        >
  <View style={style.mobileUpperMenu}>
            
            <View style={style.menubutton}>
            <Text >Press</Text>
            </View>
            <View style={style.menubutton}>
            <Text >Press2</Text>
            </View>
            </View>

        </LinearGradient>
        

      
        </>
    )
}

export default Menu;