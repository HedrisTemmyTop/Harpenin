import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ReusableButton from "./ReusableButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import TextFont from "./TextFont";
import Input from "./Input";
import FullLoader from "./FullLoader";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const handleGoBack = function () {
    router.push("/(auth)/login");
  };
  const handleChange = function (value: string) {
    setEmail({
      value,
      error: "",
    });
  };
  const handleSubmit = function () {
    if (!email.value)
      return setEmail((prev) => ({
        ...prev,
        error: "You’ve not entered your email yet.",
      }));

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false), router.push("/(auth)/reset-password");
    }, 3000);

    // router.push("")
  };
  return (
    <View style={styles.container}>
      {isSubmitting && <FullLoader />}
      <View>
        <ReusableButton onPress={handleGoBack} style={styles.back}>
          <Ionicons name="arrow-back-sharp" size={20} color="black" />
        </ReusableButton>
      </View>
      <TextFont style={styles.headText} font="NunitoSans_600SemiBold">
        Forgot your password?
      </TextFont>
      <Text style={styles.textSmall}>
        No worries, we’ve got you. Enter your email below.{" "}
      </Text>
      <View style={styles.content}>
        <Text style={styles.label}> Registered email address</Text>

        <Input
          onChange={handleChange}
          placeholder={
            <View style={styles.placeholder}>
              <Image source={require("@/assets/images/mail.png")} />
              <TextFont
                font="NunitoSans_400Regular"
                style={styles.placeholderText}
              >
                Email Address
              </TextFont>
            </View>
          }
          value={email.value}
          config={{
            autoCorrect: false,
            autoCapitalize: "none",
          }}
          error={email.error}
        />
      </View>
      <View style={styles.buttons}>
        <ReusableButton onPress={handleSubmit} style={styles.button}>
          <TextFont font="NunitoSans_700Bold" style={styles.buttonText}>
            Reset my password
          </TextFont>
        </ReusableButton>
        <ReusableButton
          onPress={() => router.push("/(auth)/login")}
          style={styles.remember}
        >
          <Text style={styles.loginText}>I remember my password already</Text>
        </ReusableButton>
      </View>
    </View>
  );
};

export default ForgotPasswordForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
  back: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: Colors.primary.line,
    justifyContent: "center",
    alignItems: "center",
  },
  headText: {
    fontSize: 32,
    color: "#000",
    marginTop: 48,
  },
  textSmall: {
    fontSize: 16,
    color: Colors.primary.text,
    fontFamily: "Montaga-Regular",
    marginTop: 5,
  },
  content: {
    marginTop: 56,
    marginBottom: 70,
    // backgroundColor: "red",
    width: "100%",
  },
  placeholder: {
    flexDirection: "row",
    alignItems: "center",
  },
  placeholderText: {
    color: Colors.primary.text,
    marginLeft: 5,
  },
  label: {
    fontSize: 13,
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.primary.button,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    borderRadius: 12,
    marginTop: 15,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
  loginText: {
    textAlign: "center",
  },
  buttons: {
    flex: 1,
    // backgroundColor: "yellow",
  },

  remember: {
    marginTop: 20,
  },
});
