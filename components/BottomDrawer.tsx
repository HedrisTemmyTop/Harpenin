import { BlurView } from "expo-blur";
import React, { ReactNode } from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface PropTypes {
  onClose: VoidFunction;
  children: ReactNode;
}
// import { BlurView } from "@react-native-community/blur";
const deviceHeight = Dimensions.get("window").height;

const BottomDrawer = ({ onClose, children }: PropTypes) => {
  console.log("draw");

  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <BlurView intensity={30} tint="dark" style={styles.blurView}>
        <View style={styles.conatiner}>
          <View style={styles.wrapper}>{children}</View>
        </View>
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
  wrapper: {
    backgroundColor: "#FFF",
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    height: deviceHeight / 2,
    paddingHorizontal: 24,
    paddingTop: 52,
    paddingBottom: 36,
    maxHeight: 450,
  },
});
