import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  style: any;
  textStyle?: any;
  onPress: () => void;
}

const ReusableButton = ({ children, style, textStyle, onPress }: PropTypes) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  );
};

export default ReusableButton;

const styles = StyleSheet.create({});
