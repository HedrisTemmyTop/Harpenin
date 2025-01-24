import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
type IconName = keyof typeof Ionicons.glyphMap;

interface PropTypes {
  onPress: () => void;
  icon?: IconName;
  iconImage?: ReactNode;
  size: number;
  color: string;
  style?: any;
}

const IconButton = ({
  color,
  onPress,
  style,
  icon,
  iconImage,
  size,
}: PropTypes) => {
  return (
    <Pressable onPress={onPress} style={style}>
      {icon && <Ionicons name={icon} size={size} color={color} />}
      {iconImage && iconImage}
    </Pressable>
  );
};

export default IconButton;
