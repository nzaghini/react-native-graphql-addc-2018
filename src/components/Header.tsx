import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
    const { container, title } = styles;
    return (
        <View style={container}>
            <Text style={title}>Movies</Text> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#F8F8F8",
      justifyContent: "center", // vertical
      alignItems: "center", // horizontal
      height: 60,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
    },
    title: {
      fontSize: 18,
    },
});

export default Header;
