import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  NunitoSans_600SemiBold,
  NunitoSans_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import React, { ReactNode } from "react";
import { Text } from "react-native";

interface PropTypes {
  children: ReactNode;
  style: any;
  font: string;
}

const TextFont = ({ children, style, font }: PropTypes) => {
  const [fontsLoaded] = useFonts({
    NunitoSans_600SemiBold,
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
  });
  if (!fontsLoaded) return null;
  return <Text style={[style, { fontFamily: font }]}>{children}</Text>;
};

export default TextFont;
