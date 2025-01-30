import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import TextFont from "./TextFont";
import ReusableButton from "./ReusableButton";
import { useReminder } from "@/context/ReminderContext";
import { Colors } from "@/constants/Colors";
interface PropTypes {
  onClose: VoidFunction;
  activeId: number | null;
  onSubmit: () => void;
}

const deviceHeight = Dimensions.get("window").height;
const ReminderDrawer = ({ activeId, onSubmit, onClose }: PropTypes) => {
  const { onAddReminder } = useReminder();
  const handleAddReminder = function () {
    if (activeId === null) return;
    onAddReminder(activeId);
    onSubmit();
    onClose();
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <View style={styles.bell}>
          <Image source={require("@/assets/images/bell.png")} />
        </View>
        <TextFont style={styles.textHeader} font="NunitoSans_700Bold">
          Turn On Event Reminders?
        </TextFont>
        <TextFont style={styles.textSmall} font="NunitoSans_400Regular">
          Get reminded of your upcoming events and new event uploads once in a
          while.
        </TextFont>
      </View>
      <ReusableButton style={styles.btn} onPress={handleAddReminder}>
        <TextFont style={styles.btnText} font="NunitoSans_700Bold">
          Yes, thanks
        </TextFont>
      </ReusableButton>
    </View>
  );
};

export default ReminderDrawer;

const styles = StyleSheet.create({
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
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  bell: {
    backgroundColor: Colors.primary.border,
    width: 80,
    height: 80,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 18,
    marginTop: 16,
  },
  textSmall: {
    fontSize: 16,
    color: Colors.primary.text,
    textAlign: "center",
    maxWidth: 322,
    marginTop: 16,
  },

  btn: {
    width: "100%",
    backgroundColor: Colors.primary.button,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 80,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
  },
});
