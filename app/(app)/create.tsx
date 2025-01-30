import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import IconButton from "@/components/IconButton";
import TextFont from "@/components/TextFont";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import Input from "@/components/Input";
import ReusableButton from "@/components/ReusableButton";
import { LinearGradient } from "expo-linear-gradient";
import EventStepOne from "@/components/EventStepOne";
import EventStepTwo from "@/components/EventStepTwo";
import { useRouter } from "expo-router";
// import DatePicker from "react-native-datepicker";
// import EventDateTimePicker from "@/components/DateInput";

const Create = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [images, setImages] = useState([]);
  const initialState = {
    title: {
      value: "",
      error: "",
    },
    description: {
      value: "",
      error: "",
    },
    info: {
      value: "",
      error: "",
    },
    dates: [
      {
        date: "",
        startTime: "",
        endTime: "",
      },
    ],
  };

  const [state, setState] = useState(initialState);
  const handleDateChange = function (enteredDate: string) {};
  // const handleChange = function (name) {};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerMain}>
          {step === 1 ? (
            <IconButton
              color="black"
              icon="close"
              size={24}
              style={{}}
              onPress={() => {
                router.push("/(tabs)/profile");
              }}
            />
          ) : (
            <IconButton
              icon="arrow-back"
              color="black"
              size={24}
              style={{}}
              onPress={() => {
                setStep(1);
              }}
            />
          )}
          <TextFont style={styles.textSize} font="NunitoSans_700Bold">
            Create event
          </TextFont>
        </View>
        <View style={styles.stepper}>
          <View style={[styles.line, styles.activeLine]}></View>
          <View style={[styles.line, step === 2 && styles.activeLine]}></View>
        </View>
      </View>

      <ScrollView style={styles.form}>
        {step === 1 && <EventStepOne />}
        {step === 2 && <EventStepTwo />}
        <View style={styles.button}>
          {step === 2 && (
            <ReusableButton
              onPress={() => {
                router.push("/(app)/preview");
              }}
              style={[styles.proceed, styles.preview]}
            >
              <TextFont
                style={[styles.proceedText, styles.previewText]}
                font="NunitoSans_700Bold"
              >
                See event preview 👀
              </TextFont>
            </ReusableButton>
          )}
          <ReusableButton
            onPress={() => {
              setStep(2);
            }}
            style={styles.proceed}
          >
            <TextFont style={styles.proceedText} font="NunitoSans_700Bold">
              {step === 1 ? "Proceed" : "Post event"}
            </TextFont>
          </ReusableButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 10,
  },
  headerMain: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },

  textSize: {
    fontSize: 16,
  },

  stepper: { flexDirection: "row", gap: 10 },

  line: {
    width: 55,
    height: 4,
    backgroundColor: Colors.primary.border,
    borderRadius: 20,
  },

  activeLine: {
    backgroundColor: Colors.primary.button,
  },
  form: {
    flex: 1,
    // backgroundColor: "red",
    // marginTop: 32,

    // paddingBottom: 24,
  },

  proceed: {
    // marginTop: 80,
    // marginHorizontal: 24,
    backgroundColor: Colors.primary.button,
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  proceedText: {
    color: "#fff",
  },
  button: {
    paddingHorizontal: 24,
    marginBottom: 100,
  },
  preview: {
    marginTop: 80,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.primary.button,
  },
  previewText: {
    color: Colors.primary.button,
  },
});
