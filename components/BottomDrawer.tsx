import { BlurView } from "expo-blur";
import React, { ReactNode } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

interface PropTypes {
  onClose: VoidFunction;
  children: ReactNode;
}
// import { BlurView } from "@react-native-community/blur";

const BottomDrawer = ({ onClose, children }: PropTypes) => {
  console.log("draw");

  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <BlurView intensity={30} tint="dark" style={styles.blurView}>
        <View style={styles.conatiner}>{children}</View>
      </BlurView>
    </TouchableWithoutFeedback>
  );
};

export default BottomDrawer;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.2)",
    height: "100%",
    justifyContent: "flex-end",
    right: 0,
  },
  blurView: {
    flex: 1,
    // padding: 20,
    // margin: 16,
    textAlign: "center",
    justifyContent: "center",
    overflow: "hidden",
    // borderRadius: 20,
  },
});
