import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const Logo = () => {
  return (
    <View style={styles.logo}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={styles.imgLogo}
      />
      <Text style={styles.beta}>BETA</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 50,
    paddingHorizontal: 10,
    gap: 10,
  },
  imgLogo: {
    // marginTop:
  },
  beta: {
    fontSize: 12,
    borderWidth: 1,
    borderColor: Colors.secondary.border,
    padding: 6,
    borderRadius: 6,
    color: Colors.secondary.color,
    fontFamily: "Montaga-Regular",
  },
});
