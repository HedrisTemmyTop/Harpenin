import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TextFont from "./TextFont";
import ReusableButton from "./ReusableButton";
import { Colors } from "@/constants/Colors";
import Input from "./Input";
import FollowAlert from "./FollowAlert";

interface PropTypes {
  onSubmit: VoidFunction;
}

const ReportDrawer = ({ onSubmit }: PropTypes) => {
  const [active, setActive] = useState<null | number>(null);

  const btnTexts = [
    "This event is not valid",
    "    There’s a mistake in the event details",
    "       I’m the facilitator for this event",
  ];

  return (
    <View>
      <TextFont font="NunitoSans_600SemiBold" style={styles.drawerTitle}>
        Report event
      </TextFont>
      <TextFont font="NunitoSans_700Bold" style={styles.drawerHead}>
        Hi, please tell us what’s wrong
      </TextFont>
      <View style={styles.btns}>
        {btnTexts.map((text, index) => (
          <ReusableButton
            onPress={() => {
              console.log(index);
              setActive(index);
            }}
            style={[styles.btn, active === index && styles.clickedBtn]}
            key={text}
          >
            <TextFont
              font="NunitoSans_600SemiBold"
              style={[styles.btnText, active === index && styles.clickedText]}
            >
              {text}
            </TextFont>
          </ReusableButton>
        ))}

        <Input
          value=""
          onChange={() => {}}
          placeholder={"I am reporting something else"}
          inputStyle={styles.input}
          containerStyle={styles.containerStyle}
        />
        <ReusableButton onPress={() => onSubmit()} style={styles.submitBtn}>
          <TextFont font="NunitoSans_600SemiBold" style={styles.submitBtnText}>
            Report this event
          </TextFont>
        </ReusableButton>
      </View>
    </View>
  );
};

export default ReportDrawer;

const styles = StyleSheet.create({
  drawerTitle: {
    fontSize: 16,
    textAlign: "center",
  },
  drawerHead: {
    fontSize: 23,
    marginTop: 30,
    textAlign: "center",
  },
  btn: {
    backgroundColor: Colors.primary.border,
    width: "100%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  btnText: {
    fontSize: 16,
    color: "#474E60",
  },
  btns: {
    gap: 8,
    marginTop: 20,
  },
  input: {},
  submitBtn: {
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
  containerStyle: {
    flex: 0,
  },
  clickedBtn: {
    borderColor: Colors.primary.button,
    borderWidth: 1,
  },
  clickedText: {
    color: Colors.primary.button,
  },
});
