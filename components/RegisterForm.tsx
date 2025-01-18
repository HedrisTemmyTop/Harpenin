import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthHeader from "./AuthHeader";
import Input from "./Input";
import { Colors } from "@/constants/Colors";
import ReusableButton from "./ReusableButton";
import TextFont from "./TextFont";

const RegisterForm = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = function (key: string, value: string) {
    console.log(key, value);
    setState((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  return (
    <View style={styles.container}>
      <AuthHeader
        header={"Hi, create your account."}
        smallText={"Literally takes less than 5 minutes..."}
        type="register"
      >
        <View style={styles.formWrapper}>
          <View style={styles.box}>
            <Text style={styles.label}>What's your name</Text>
            <View style={styles.row}>
              <Input
                onChange={(val) => handleChange("firstName", val)}
                placeholder={"First Name"}
                value={state.firstName}
                config={{
                  autoCorrect: false,
                }}
              />
              <Input
                onChange={(val) => handleChange("lastName", val)}
                placeholder={"Last Name"}
                value={state.lastName}
                config={{
                  autoCorrect: false,
                }}
              />
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.formBottom}>
            <View style={styles.bottomBox}>
              <Text style={styles.label}>Email Address</Text>
              <Input
                onChange={(val) => handleChange("email", val)}
                placeholder={"Email Address"}
                value={state.email}
                config={{
                  autoCorrect: false,
                }}
              />
            </View>
            <View style={styles.bottomBox}>
              <Text style={styles.label}>Password</Text>
              <Input
                onChange={(val) => handleChange("password", val)}
                placeholder={"Password "}
                value={state.password}
                config={{
                  autoCorrect: false,
                  secureTextEntry: true,
                }}
              />
            </View>
            <ReusableButton onPress={() => {}} style={styles.button}>
              <TextFont font="NunitoSans_700Bold" style={styles.buttonText}>
                Create my account
              </TextFont>
            </ReusableButton>

            <ReusableButton onPress={() => {}}>
              <Text style={styles.loginText}> I already have an account</Text>
            </ReusableButton>
          </View>
        </View>
      </AuthHeader>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: "#fff",
  },
  formWrapper: {
    flex: 1,
  },

  label: {
    fontSize: 13,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    gap: 25,
  },
  box: {
    paddingHorizontal: 24,
  },
  line: {
    height: 1,
    backgroundColor: Colors.secondary.line,
    marginVertical: 45,
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
});
