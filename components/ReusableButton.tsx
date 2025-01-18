import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  style?: any;

  onPress: () => void;
}

const ReusableButton = ({ children, style, onPress }: PropTypes) => {
  return (
    <Pressable style={style} onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default ReusableButton;

const styles = StyleSheet.create({});
