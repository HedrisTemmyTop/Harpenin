import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ReusableButton from "./ReusableButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import TextFont from "./TextFont";
import Input from "./Input";

const ForgotPasswordForm = () => {
  const [state, setState] = useState({
    password: {
      value: "",
      error: "",
    },
    confirmPassword: {
      value: "",
      error: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const handleGoBack = function () {
    router.push("/(auth)/forgot-password");
  };
  const handleChange = function (key: string, value: string) {
    // set({
    //   value,
    //   error: "",
    // });
  };
  const handleSubmit = function () {
    // if (!email)
    //   return setEmail((prev) => ({
    //     ...prev,
    //     error: "You’ve not entered your email yet.",
    //   }));
    // router.push("")
  };
  return (
    <View style={styles.container}>
      <View>
        <ReusableButton onPress={handleGoBack} style={styles.back}>
          <Ionicons name="arrow-back-sharp" size={20} color="black" />
        </ReusableButton>
      </View>
      <TextFont style={styles.headText} font="NunitoSans_600SemiBold">
        Reset your password
      </TextFont>
      <Text style={styles.textSmall}>Set up your new password below. </Text>
      <View style={styles.content}>
        <View style={styles.bottomBox}>
          <Text style={styles.label}> New password</Text>

          <Input
            onChange={(val) => handleChange("password", val)}
            placeholder={
              <View style={styles.placeholder}>
                <Image source={require("@/assets/images/lock.png")} />
                <TextFont
                  font="NunitoSans_400Regular"
                  style={styles.placeholderText}
                >
                  Secure password
                </TextFont>
              </View>
            }
            value={state.password.value}
            config={{
              autoCorrect: false,

              autoCapitalize: "none",
              secureTextEntry: true,
            }}
            error={state.password.error}
          />
        </View>
        <View style={styles.bottomBox}>
          <Text style={styles.label}> Confirm new password</Text>

          <Input
            onChange={(val) => handleChange("password", val)}
            placeholder={
              <View style={styles.placeholder}>
                <Image source={require("@/assets/images/lock.png")} />
                <TextFont
                  font="NunitoSans_400Regular"
                  style={styles.placeholderText}
                >
                  Secure password
                </TextFont>
              </View>
            }
            value={state.password.value}
            config={{
              autoCorrect: false,

              autoCapitalize: "none",
              secureTextEntry: true,
            }}
            error={state.password.error}
          />
        </View>
      </View>
      <View style={styles.buttons}>
        <ReusableButton
          onPress={() => router.push("/(auth)/reset-success")}
          style={styles.button}
        >
          <TextFont font="NunitoSans_700Bold" style={styles.buttonText}>
            Reset my password
          </TextFont>
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
    flexDirection: "column",
    // flex: 1,
    // backgroundColor: "red",
    width: "100%",
  },

  bottomBox: {
    height: 100,
    // flex: 1,
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
  buttons: {},

  remember: {
    marginTop: 20,
  },
});
