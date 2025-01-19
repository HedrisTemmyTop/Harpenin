import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthHeader from "./AuthHeader";
import Input from "./Input";
import ReusableButton from "./ReusableButton";
import TextFont from "./TextFont";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
type InputField = {
  value: string;
  error: string;
};
type FormState = {
  email: InputField;
  password: InputField;
};
const LoginForm = () => {
  const router = useRouter();
  const inputFormat = {
    value: "",
    error: "",
  };
  const [state, setState] = useState<FormState>({
    email: inputFormat,
    password: inputFormat,
  });
  const handleChange = function (key: string, value: string) {
    console.log(key, value);
    setState((prev) => {
      return {
        ...prev,
        [key]: {
          error: "",
          value,
        },
      };
    });
  };

  const handleSubmit = function () {
    let valid = true;
    Object.keys(state).forEach((key: string) => {
      const field = state[key as keyof FormState];
      if (field.value === "") {
        valid = false;
        setState((prev) => ({
          ...prev,
          [key]: {
            error: "This field is required",
          },
        }));
      }
    });

    console.log(state);

    if (!valid) return;

    // move to login screen
  };

  return (
    <View style={styles.container}>
      <AuthHeader
        header={"Hey, welcome back!"}
        smallText={"We’re glad to have you back :)"}
        type="login"
      >
        <View style={styles.formBottom}>
          <View style={styles.bottomBox}>
            <Text style={styles.label}>Email Address</Text>
            <Input
              onChange={(val) => handleChange("email", val)}
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
              value={state.email.value}
              config={{
                autoCorrect: false,
                autoCapitalize: "none",
              }}
              error={state.email.error}
            />
          </View>
          <View style={styles.bottomBox}>
            <Text style={styles.label}>Password</Text>
            <Input
              onChange={(val) => handleChange("password", val)}
              placeholder={
                <View style={styles.placeholder}>
                  <Image source={require("@/assets/images/lock.png")} />
                  <TextFont
                    font="NunitoSans_400Regular"
                    style={styles.placeholderText}
                  >
                    Password
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
          <View style={styles.forgot}>
            <ReusableButton onPress={() => {}} style={{}}>
              <TextFont font="NunitoSans_600SemiBold" style={styles.forgotText}>
                Forgot my password
              </TextFont>
            </ReusableButton>
          </View>
          <ReusableButton onPress={handleSubmit} style={styles.button}>
            <TextFont font="NunitoSans_700Bold" style={styles.buttonText}>
              Show me what’s Harpenin 👀
            </TextFont>
          </ReusableButton>

          <ReusableButton onPress={() => router.push("/(auth)/register")}>
            <Text style={styles.loginText}> I don’t have an account yet</Text>
          </ReusableButton>
        </View>
      </AuthHeader>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: "#fff",
  },
  formBottom: {
    paddingHorizontal: 24,
    flex: 1,
    flexDirection: "column",
    gap: 25,
  },
  bottomBox: {
    height: 80,
  },
  button: {
    backgroundColor: Colors.primary.button,
    paddingVertical: 20,
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
  label: {
    fontSize: 13,
    marginBottom: 10,
  },
  forgot: {
    alignItems: "flex-end",
  },
  forgotText: {
    color: Colors.primary.text,
  },
  placeholder: {
    flexDirection: "row",
    alignItems: "center",
  },
  placeholderText: {
    color: Colors.primary.text,
    marginLeft: 5,
  },
});
