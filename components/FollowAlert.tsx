import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode, useEffect } from "react";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import TextFont from "./TextFont";
import ReusableButton from "./ReusableButton";
import IconButton from "./IconButton";
type IconName = keyof typeof Ionicons.glyphMap;

const FollowAlert = ({
  children,
  onClose,
  alertIcon,
}: {
  onClose: VoidFunction;
  children: ReactNode;
  alertIcon: {
    icon: IconName;
    color: string;
    size: number;
  };
}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <IconButton
          style={[styles.icon, alertIcon.icon === "close" && styles.border]}
          onPress={onClose}
          {...alertIcon}
        />
        <TextFont
          font="NunitoSans_400Regular"
          style={[styles.text, alertIcon.icon === "close" && styles.white]}
        >
          {children}
        </TextFont>
      </View>
    </View>
  );
};

export default FollowAlert;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    // flex: 1,
    left: 0,
    right: 0,
    // top: 0,
    zIndex: 2,

    justifyContent: "center",
    alignItems: "center",
  },

  wrapper: {
    backgroundColor: Colors.purple.secondary,
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    maxWidth: 190,
    width: "100%",
    flex: 1,
    borderRadius: 12,
  },
  text: {
    fontSize: 13,
    color: Colors.tertiary.success,
  },
  icon: {
    padding: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  border: {
    borderWidth: 2,
    borderColor: "#fff",
  },
  white: {
    color: "#fff",
  },
});
