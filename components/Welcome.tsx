import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import TextFont from "./TextFont";
import ReusableButton from "./ReusableButton";
import { useRouter } from "expo-router";
import Logo from "./Logo";

const Welcome = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const handlePress = function () {
    if (step === 4) router.push("/(auth)/verify");

    setStep((prev) => prev + 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/bg.png")}
          style={styles.image}
        />
        <LinearGradient
          colors={["transparent", "#fff"]}
          style={styles.gradient}
        />
      </View>
      <View style={styles.content}>
        <Logo />
        <View style={styles.stepper}>
          <Text
            style={[
              styles.line,
              step === 1 && { backgroundColor: "#111111", height: 2 },
            ]}
          ></Text>
          <Text
            style={[
              styles.line,
              step === 2 && { backgroundColor: "#111111", height: 2 },
            ]}
          ></Text>
          <Text
            style={[
              styles.line,
              step === 3 && { backgroundColor: "#111111", height: 2 },
            ]}
          ></Text>
          <Text
            style={[
              styles.line,
              step === 4 && { backgroundColor: "#111111", height: 2 },
            ]}
          ></Text>
          <Text></Text>
        </View>
        <Text style={styles.titleContainer}>
          <TextFont style={styles.title} font="NunitoSans_600SemiBold">
            Never miss events ever again with our app!
          </TextFont>
        </Text>
        <TextFont font="NunitoSans_400Regular" style={styles.description}>
          We'll help you find events in your town. Online or offline, based on
          your interests.
        </TextFont>
        <ReusableButton onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonTextContainer}>
            <TextFont style={styles.buttonText} font="NunitoSans_700Bold">
              Get started 💛
            </TextFont>
          </Text>
        </ReusableButton>
        <TextFont style={styles.loginText} font="NunitoSans_600SemiBold">
          I already have an account
        </TextFont>
      </View>
      {/* </LinearGradient> */}
      {/* <Text>Never miss events ever again with our app!</Text> */}
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: { width: "100%", height: "100%", resizeMode: "cover" },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "50%", // Adjust this to control the gradient height
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "50%",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },

  stepper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 2,
    marginTop: 40,
  },
  line: {
    backgroundColor: Colors.primary.line,
    height: 1,
    width: 75,
    // flexBasis: 33,
  },
  titleContainer: {
    textAlign: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    color: "#000",
    marginTop: 20,
    textAlign: "left",
  },
  description: {
    fontSize: 16,
    color: Colors.primary.text,
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: Colors.primary.button,
    borderColor: "#000",
    borderWidth: 1,

    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonTextContainer: {
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#7D7D7D",
    fontSize: 14,
    textAlign: "center",
  },
});
