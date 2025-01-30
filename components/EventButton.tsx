import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TextFont from "./TextFont";
import ReusableButton from "./ReusableButton";
import { Colors } from "@/constants/Colors";

interface PropTypes {
  isActive: boolean;
  onToggle: (arg: boolean) => void;
  label: string;
  firstButton: string;
  secondButton: string;
}

const EventButton = ({
  isActive,
  onToggle,
  label,
  firstButton,
  secondButton,
}: PropTypes) => {
  return (
    <View>
      {/* <Text>EventButton</Text> */}
      <TextFont font="NunitoSans_600SemiBold" style={styles.label}>
        {label}
      </TextFont>

      <View style={styles.btns}>
        <ReusableButton
          onPress={() => onToggle(true)}
          style={[styles.footerBtn, isActive && styles.btnActive]}
        >
          <TextFont
            style={[styles.textBtn, isActive && styles.textActive]}
            font="NunitoSans_700Bold"
          >
            {firstButton}
          </TextFont>
        </ReusableButton>
        <ReusableButton
          onPress={() => onToggle(false)}
          style={[styles.footerBtn, !isActive && styles.btnActive]}
        >
          <TextFont
            style={[styles.textBtn, !isActive && styles.textActive]}
            font="NunitoSans_700Bold"
          >
            {secondButton}
          </TextFont>
        </ReusableButton>
      </View>
    </View>
  );
};

export default EventButton;

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
  },
  btns: {
    flexDirection: "row",
    backgroundColor: Colors.primary.border,
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 6,
    marginBottom: 40,
  },
  footerBtn: {
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "50%",
    borderRadius: 6,
    // marginBottom: 40,
  },
  btnActive: {
    backgroundColor: "#fff",
  },
  textBtn: {
    color: Colors.primary.text,
    fontSize: 14,
  },
  textActive: {
    color: "#B88A2A",

    // backgroundClip: "text",
    //    // Apply gradient inside text on web, but not supported in React Native yet
    // -webkit-background-clip: 'text',
  },
});
