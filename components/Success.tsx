import { Image, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "@/constants/Colors";
import TextFont from "./TextFont";
import ReusableButton from "./ReusableButton";
import { useRouter } from "expo-router";

interface PropTypes {
  btnText: string;
  message: string;
  caption: string;
  children: ReactNode;
  onNext: () => void;
}

const Success = ({
  btnText,
  message,
  caption,
  children,
  onNext,
}: PropTypes) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* <Text>Success</Text> */}
      <View style={styles.content}>
        <View style={styles.image}>{children}</View>
        <TextFont style={styles.email} font="NunitoSans_700Bold">
          {message}
        </TextFont>
        <TextFont font="NunitoSans_400Regular" style={styles.textSmall}>
          {caption}
        </TextFont>
      </View>
      <ReusableButton onPress={onNext} style={styles.button}>
        <TextFont font="NunitoSans_700Bold" style={styles.buttonText}>
          {btnText}
        </TextFont>
      </ReusableButton>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 80,
    paddingHorizontal: 24,
    paddingVertical: 80,
    // padding24,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    backgroundColor: Colors.primary.border,
    width: 80,
    height: 80,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  email: {
    fontSize: 18,
    marginTop: 20,
    color: "#111111",
    textAlign: "center",
  },

  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  textSmall: {
    color: Colors.primary.text,
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
  },
  button: {
    backgroundColor: Colors.primary.button,
    paddingVertical: 18,
    width: "100%",
    borderRadius: 12,
    marginTop: 15,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
});
