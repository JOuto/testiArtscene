import React, { useEffect, useState } from "react";
import {Pressable, View, Text} from "react-native";
import style from "./Menu.css";
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";


const Menu = () => {


    return (
        <>
        
        <View style={style.mobileUpperMenu}>
        <Text style={{color: "black"}}>Press</Text>
        <LinearGradient
        colors={["#77df8e", "#fbf4fd"]} 
        start={[0, 1]} end={[1, 0]}
        style={style.mobileUpperMenu}
        >


        </LinearGradient>
        <Pressable style={style.pressable}><Text>Press</Text></Pressable>

       </View>
        </>
    )
}

export default Menu;