import { Image, StyleSheet, Text, View } from "react-native";
import React, { ReactNode, useEffect, useState } from "react";
import TextFont from "./TextFont";
import { Colors } from "@/constants/Colors";
interface PropTypes {
  children: ReactNode;
}

const Reminder = ({ children }: PropTypes) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, []);
  if (!show) return;
  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoIcon}>
        <Image source={require("@/assets/images/info.png")} />
      </View>
      <View style={styles.textWrapper}>
        <TextFont font="NunitoSans_400Regular" style={styles.infoText}>
          {children}
        </TextFont>
      </View>
    </View>
  );
};

export default Reminder;

const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 24,
    backgroundColor: Colors.purple.secondary,

    padding: 24,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 16,
  },

  infoIcon: {
    borderWidth: 1,
    borderColor: "#fff",
    width: 36,
    height: 36,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    color: "#fff",
    fontSize: 13,
    maxWidth: "100%",
  },
  textWrapper: {
    flexBasis: "90%",
  },
});
