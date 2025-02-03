import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextFont from "./TextFont";
import ReusableButton from "./ReusableButton";
import { Colors } from "@/constants/Colors";
import Input from "./Input";

const ReportDrawer = () => {
  return (
    <View>
      <TextFont font="NunitoSans_600SemiBold" style={styles.drawerTitle}>
        Report event
      </TextFont>
      <TextFont font="NunitoSans_700Bold" style={styles.drawerHead}>
        Hi, please tell us what’s wrong
      </TextFont>
      <View style={styles.btns}>
        <ReusableButton onPress={() => {}} style={styles.btn}>
          <TextFont font="NunitoSans_600SemiBold" style={styles.btnText}>
            This event is not valid
          </TextFont>
        </ReusableButton>
        <ReusableButton onPress={() => {}} style={styles.btn}>
          <TextFont font="NunitoSans_600SemiBold" style={styles.btnText}>
            There’s a mistake in the event details
          </TextFont>
        </ReusableButton>
        <ReusableButton onPress={() => {}} style={styles.btn}>
          <TextFont font="NunitoSans_600SemiBold" style={styles.btnText}>
            I’m the facilitator for this event
          </TextFont>
        </ReusableButton>
        <Input
          value=""
          onChange={() => {}}
          placeholder={"I am reporting something else"}
          inputStyle={styles.input}
        />
        <ReusableButton onPress={() => {}} style={styles.submitBtn}>
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
});
