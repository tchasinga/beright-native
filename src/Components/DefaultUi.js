import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import myImg from "../Images/pexelspolinakovaleva.jpg";
import Global from "../Global/Global";

const DefaultUi = () => {
  return (
    <View style={Global.container}>
      <Image source={myImg} style={{ width: 300, height: 300 }} />
      <Text style={Global.Texter}>Please start planing your...</Text>
    </View>
  );
};

export default DefaultUi;
