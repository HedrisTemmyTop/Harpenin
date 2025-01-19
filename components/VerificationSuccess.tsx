import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import TextFont from "./TextFont";
import ReusableButton from "./ReusableButton";
import { useRouter } from "expo-router";

const VerificationSuccess = () => {
  const router = useRouter();
  const handleNext = function () {
    router.push("/(app)/home");
  };
  return (
    <View style={styles.container}>
      {/* <Text>VerificationSuccess</Text> */}
      <View style={styles.content}>
        <View style={styles.image}>
          <Image
            source={require("@/assets/images/ic_round-mark-email-read.png")}
          />
        </View>
        <TextFont style={styles.email} font="NunitoSans_700Bold">
          Email already verified!
        </TextFont>
        <TextFont font="NunitoSans_400Regular" style={styles.textSmall}>
          Oluwatobi, we’re glad to have you onboard. See you around adventurer.
        </TextFont>
      </View>
      <ReusableButton onPress={handleNext} style={styles.button}>
        <TextFont font="NunitoSans_700Bold" style={styles.buttonText}>
          Show me what’s Harpenin 👀
        </TextFont>
      </ReusableButton>
    </View>
  );
};

export default VerificationSuccess;

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
