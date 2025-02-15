import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Global from "../Global/Global";

// Importing local image
const myImg = require("../Images/pexelspolinakovaleva.jpg");

const DefaultUi = () => {
  return (
    <View style={Global.container}>
      <Image source={myImg} style={Global.ImageStyle} />
      <Text style={Global.newText}>Your todo list is empty.</Text>
      <Text style={Global.subText}>Add some tasks to get started!</Text>
    </View>
  );
};

export default DefaultUi;