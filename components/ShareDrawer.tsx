import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TextFont from "./TextFont";
import ReusableButton from "./ReusableButton";
import { Colors } from "@/constants/Colors";
import Input from "./Input";
import FollowAlert from "./FollowAlert";
import Checkbox from "expo-checkbox";

interface PropTypes {
  onSubmit: VoidFunction;
}

const ShareDrawer = () => {
  const [isChecked, setChecked] = useState(false);
  return (
    <>
      <View style={styles.wrapper}>
        <TextFont font="NunitoSans_600SemiBold" style={styles.drawerTitle}>
          Event Sharing
        </TextFont>

        <View style={styles.imageWrapper}>
          <View style={styles.imagePreview}>
            <Image
              source={require("@/assets/images/preview.png")}
              style={styles.image}
            />
          </View>
        </View>
        <TextFont font="NunitoSans_700Bold" style={styles.drawerHead}>
          Lagos Startup Week 2023{" "}
        </TextFont>
        <TextFont font="NunitoSans_700Bold" style={styles.date}>
          14TH JULY, 2023 · WAT 8:00PM
        </TextFont>
      </View>

      <View style={styles.btns}>
        <View style={styles.link}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? Colors.primary.button : undefined}
          />
          {/* <CheckBox value={isSelected} onValueChange={setSelection} /> */}
          <Text style={styles.checkboxText}>Also share link to the app</Text>
        </View>
        <ReusableButton onPress={() => {}} style={styles.submitBtn}>
          <TextFont font="NunitoSans_600SemiBold" style={styles.submitBtnText}>
            Share event
          </TextFont>
        </ReusableButton>
      </View>
    </>
  );
};

export default ShareDrawer;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  drawerTitle: {
    fontSize: 16,
    textAlign: "center",
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  imagePreview: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#B3B3C0",
    borderRadius: 12,
    width: 233,
    height: 169,
    // textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 12,
  },
  drawerHead: {
    fontSize: 23,
    marginTop: 18,
    textAlign: "center",
  },
  date: {
    color: Colors.purple.primary,
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: Colors.purple.primary,
    borderRadius: 5,
    marginTop: 8,
  },
  // dateWrapper:

  btns: {
    gap: 24,
    marginTop: 32,
  },
  submitBtn: {
    // flex: 1,
    width: "100%",
    backgroundColor: Colors.primary.button,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 20,
  },
  submitBtnText: {
    color: "#fff",
    fontSize: 16,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    // marginBottom: 24,
  },

  checkbox: {
    borderRadius: 5,
    width: 20,
    height: 20,
  },
  checkboxText: {
    // fontFamily:

    fontFamily: "Montaga-Regular",
  },
});
