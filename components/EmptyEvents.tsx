import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import TextFont from "./TextFont";
import ReusableButton from "./ReusableButton";

const EmptyEvents = () => {
  return (
    <View style={styles.empty}>
      <View style={styles.img}>
        <Image source={require("@/assets/images/empty-events.png")} />
      </View>
      <TextFont font="NunitoSans_700Bold" style={styles.boldText}>
        You’ve not added any events to follow
      </TextFont>
      <TextFont font="NunitoSans_400Regular" style={styles.smallText}>
        You can add events you like on the explore tab
      </TextFont>

      <ReusableButton onPress={() => {}} style={styles.btn}>
        <TextFont font="NunitoSans_700Bold" style={styles.btnText}>
          Explore events
        </TextFont>
      </ReusableButton>
    </View>
  );
};

export default EmptyEvents;

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 5,
  },
  img: {
    backgroundColor: Colors.primary.border,
    width: 80,
    height: 80,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  boldText: {
    fontSize: 18,
    marginBottom: 10,
  },
  smallText: {
    color: Colors.primary.text,
  },

  btnText: {
    color: Colors.secondary.color,
    fontSize: 14,
  },
  btn: { marginTop: 40 },
});
