import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useRef, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import OtpInput from "./OtpInput";
import TextFont from "./TextFont";
import ReusableButton from "./ReusableButton";
import FullLoader from "./FullLoader";
import { useRouter } from "expo-router";
type INativeEvent = {
  key: string; // The key pressed, for example "Backspace", "Enter", "a", etc.
};
interface INativeEventProp {
  nativeEvent: INativeEvent;
}

const VerifyEmail = () => {
  const [otps, setOtps] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const inputsRef = useRef<Array<TextInput | null>>([null, null, null, null]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const handleOtpChange = function (index: number, value: string) {
    // Only accept numbers
    if (!/^\d*$/.test(value)) return;

    setOtps((prev) => {
      const prevOtps = [...prev];
      // If we're on the last input (index 3), just replace the value
      if (index === 3) {
        prevOtps[index] = value.slice(-1); // Only take the last digit if multiple are pasted
        return prevOtps;
      }

      // For other inputs, update and move to next if value exists
      prevOtps[index] = value.slice(-1);
      if (value) {
        inputsRef.current[index + 1]?.focus();
      }
      return prevOtps;
    });

    if (error) {
      setError("");
    }
  };

  const handleDelete = function (index: number, nativeEvent: INativeEvent) {
    if (nativeEvent.key === "Backspace") {
      setOtps((prev) => {
        const newOtps = [...prev];

        // If current input is empty and we're not at the first input,
        // clear previous input and move focus back
        if (!newOtps[index] && index > 0) {
          newOtps[index - 1] = "";
          inputsRef.current[index - 1]?.focus();
        } else {
          // If current input has value, just clear it
          newOtps[index] = "";
        }

        return newOtps;
      });
    }
  };
  const handleSubmit = function () {
    let valid = true;
    otps.forEach((otp) => {
      if (otp === "") valid = false;
    });
    if (otps[0] === "1") {
      valid = false;
      setError("Incorrect code, please try again");
    }
    if (!valid) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/(auth)/register-success");
    }, 3000);
  };
  const handleGoBack = function () {
    router.push("/(auth)/register");
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <ReusableButton onPress={handleGoBack} style={styles.back}>
            <Ionicons name="arrow-back-sharp" size={20} color="black" />
          </ReusableButton>
          <TextFont style={styles.headText} font="NunitoSans_600SemiBold">
            Verify your email
          </TextFont>
          <Text style={styles.textSmall}>
            Oluwatobi, we sent a 4-digit code to your mailbox
          </Text>
          <View style={styles.content}>
            <TextFont font="NunitoSans_400Regular" style={styles.detailText}>
              Sent to: Samsontobi890@gmail.com
            </TextFont>

            <View style={styles.inputContainer}>
              {otps.map((otp, index) => (
                <OtpInput
                  value={otp}
                  onChange={(val) => handleOtpChange(index, val)}
                  config={{
                    maxLength: 1,
                    keyboardType: "numeric",
                    onKeyPress: ({ nativeEvent }: INativeEventProp) => {
                      handleDelete(index, nativeEvent);
                    },
                  }}
                  inputStyle={styles.input}
                  key={index}
                  error={error}
                  ref={(el: TextInput | null) =>
                    (inputsRef.current[index] = el)
                  } // Explicitly type `el` as `TextInput | null`
                />
              ))}
            </View>
            {error && (
              <TextFont font="NunitoSans_400Regular" style={styles.error}>
                {error}
              </TextFont>
            )}
          </View>
          <View style={styles.buttons}>
            <View style={styles.btnWrapper}>
              <ReusableButton onPress={() => {}} style={styles.resend}>
                <TextFont style={styles.btnResend} font="NunitoSans_700Bold">
                  Resend Otp
                </TextFont>
              </ReusableButton>
              <ReusableButton style={styles.btnMain} onPress={handleSubmit}>
                <TextFont style={styles.btnMainText} font="NunitoSans_700Bold">
                  Verify email address{" "}
                </TextFont>
              </ReusableButton>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

      {isSubmitting && <FullLoader />}
    </>
  );
};

export default VerifyEmail;

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
    justifyContent: "center",
    alignItems: "center",
  },
  detailText: {
    color: "#111111",
    fontSize: 16,
    marginBottom: 15,
  },
  inputContainer: {
    // flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    maxWidth: 216,
    gap: 4,
    height: 51,
    // backgroundColor: "red",
  },

  input: {
    textAlign: "center",
    fontSize: 23,
    fontWeight: 700,
  },

  buttons: {
    // position: "absolute",
    flex: 1,
    top: "43%",
    // bottom: "-10%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    width: "100%",
    // left: 0,
    // right: 0,
    maxHeight: 150,
  },
  btnWrapper: { width: "100%" },
  btnMain: {
    backgroundColor: Colors.primary.button,
    width: "100%",
    // height: 55,
    borderRadius: 12,
    // flex: 1,
    // flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 40,

    marginTop: 15,
  },
  btnMainText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
  btnResend: {
    color: Colors.purple.primary,
  },
  resend: {
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: Colors.primary.error,
    marginTop: 5,
  },
});
