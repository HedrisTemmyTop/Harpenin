import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthHeader from "./AuthHeader";
import Input from "./Input";
import { Colors } from "@/constants/Colors";
import ReusableButton from "./ReusableButton";
import TextFont from "./TextFont";
import { useRouter } from "expo-router";
import FullLoader from "./FullLoader";
type InputField = {
  value: string;
  error: string;
};
type FormState = {
  firstName: InputField;
  lastName: InputField;
  email: InputField;
  password: InputField;
};

const RegisterForm = () => {
  const router = useRouter();

  const inputFormat = {
    value: "",
    error: "",
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, setState] = useState<FormState>({
    firstName: inputFormat,
    lastName: inputFormat,
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

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/(auth)/verify");
    }, 3000);
    // move to login screen
  };
  return (
    <>
      {isSubmitting && <FullLoader />}
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
                  value={state.firstName.value}
                  config={{
                    autoCorrect: false,

                    autoCapitalize: "none",
                  }}
                  error={state.firstName.error}
                />
                <Input
                  onChange={(val) => handleChange("lastName", val)}
                  placeholder={"Last Name"}
                  value={state.lastName.value}
                  config={{
                    autoCorrect: false,

                    autoCapitalize: "none",
                  }}
                  error={state.lastName.error}
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
              <ReusableButton onPress={handleSubmit} style={styles.button}>
                <TextFont font="NunitoSans_700Bold" style={styles.buttonText}>
                  Create my account
                </TextFont>
              </ReusableButton>

              <ReusableButton onPress={() => router.push("/(auth)/login")}>
                <Text style={styles.loginText}> I already have an account</Text>
              </ReusableButton>
            </View>
          </View>
        </AuthHeader>
      </View>
    </>
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
    marginVertical: 30,
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
  placeholder: {
    flexDirection: "row",
    alignItems: "center",
  },
  placeholderText: {
    color: Colors.primary.text,
    marginLeft: 5,
  },
});
