import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
type IconName = keyof typeof Ionicons.glyphMap;

interface PropTypes {
  onPress: () => void;
  icon: IconName;
  size: number;
  color: string;
}

const IconButton = ({ color, onPress, icon, size }: PropTypes) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;
