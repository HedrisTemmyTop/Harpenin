import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import IconButton from "@/components/IconButton";
import TextFont from "@/components/TextFont";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import Input from "@/components/Input";
import ReusableButton from "@/components/ReusableButton";
import { LinearGradient } from "expo-linear-gradient";
// import DatePicker from "react-native-datepicker";

const Create = () => {
  const [date, setDate] = useState("");

  const [singleDay, setSingleDay] = useState(true);

  const handleDateChange = function (enteredDate: string) {};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerMain}>
          <IconButton
            color="black"
            icon="close"
            size={24}
            style={{}}
            onPress={() => {}}
          />

          <TextFont style={styles.textSize} font="NunitoSans_700Bold">
            Create event
          </TextFont>
        </View>
        <View style={styles.stepper}>
          <View style={[styles.line, styles.activeLine]}></View>
          <View style={[styles.line]}></View>
        </View>
      </View>

      <ScrollView style={styles.form}>
        <View style={styles.imageContainer}>
          <View style={styles.images}>
            <Ionicons
              name="image-outline"
              size={24}
              color={Colors.primary.line}
            />
            <TextFont font="NunitoSans_600SemiBold" style={styles.imageCap}>
              Add event fliers (3 max)
            </TextFont>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextFont font="NunitoSans_600SemiBold" style={styles.label}>
              Event title
            </TextFont>
            <Input
              error=""
              value=""
              onChange={() => {}}
              placeholder={"What's happenin?"}
              //    config={}
              //   inputStyle={styles.input}
            />
          </View>
          <View style={[styles.inputWrapper, styles.inputDescription]}>
            <TextFont font="NunitoSans_600SemiBold" style={styles.label}>
              Description
            </TextFont>
            <Input
              error=""
              value=""
              onChange={() => {}}
              placeholder={"Say awesome stuff about your event"}
              //    config={}
              inputStyle={styles.description}
            />
          </View>
          <View style={[styles.inputWrapper, styles.inputAbout]}>
            <TextFont font="NunitoSans_600SemiBold" style={styles.label}>
              Other supplementary info
            </TextFont>
            <Input
              error=""
              value=""
              onChange={() => {}}
              placeholder={"Anything else can go here"}
              //    config={}
              inputStyle={styles.info}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <TextFont font="NunitoSans_600SemiBold" style={styles.label}>
            Event date and time
          </TextFont>

          <View style={styles.btns}>
            <ReusableButton
              onPress={() => {
                setSingleDay(true);
              }}
              style={[styles.footerBtn, singleDay && styles.btnActive]}
            >
              <TextFont
                style={[styles.textBtn, singleDay && styles.textActive]}
                font="NunitoSans_700Bold"
              >
                Single day event
              </TextFont>
            </ReusableButton>
            <ReusableButton
              onPress={() => {
                setSingleDay(false);
              }}
              style={[styles.footerBtn, !singleDay && styles.btnActive]}
            >
              <TextFont
                style={[styles.textBtn, !singleDay && styles.textActive]}
                font="NunitoSans_700Bold"
              >
                Multiple day event
              </TextFont>
            </ReusableButton>
          </View>

          {/* <DatePicker
            style={{ width: 200 }}
            date={date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => setDate(date)}
          /> */}
          {/* <View style={styles.inputWrapper}>
            <Input
              error=""
              value=""
              onChange={() => {}}
              placeholder={"What's happenin?"}
              //    config={}
              //   inputStyle={styles.input}
            />
          </View> */}
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
  imageContainer: { flex: 1, marginTop: 32, paddingHorizontal: 24 },
  images: {
    height: 150,
    width: "100%",
    backgroundColor: Colors.primary.border,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: Colors.primary.line,

    // marginHorizontal: 24,
    flex: 1,
  },
  imageCap: {
    fontSize: 14,
  },

  inputContainer: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 24,

    borderBottomWidth: 1,
    // backgroundColor: "blue",
    paddingHorizontal: 24,

    borderBottomColor: Colors.secondary.line,
  },
  inputWrapper: {
    // marginTop: 32,
    flex: 1,
    // backgroundColor: "red",
    // maxHeight: 80,
  },
  inputDescription: {
    // maxHeight: 112,
  },
  inputAbout: {
    // maxHeight: 171
  },
  description: {
    height: 84,
  },
  info: {
    height: 143,
  },
  label: {
    marginBottom: 8,
  },
  form: {
    flex: 1,
    // backgroundColor: "red",
    // marginTop: 32,
    paddingBottom: 24,
  },

  footer: {
    paddingHorizontal: 24,
    marginTop: 24,
  },

  btns: {
    flexDirection: "row",
    backgroundColor: Colors.primary.border,
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 6,
    marginBottom: 40,
  },
  footerBtn: {
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "50%",
    borderRadius: 6,
    // marginBottom: 40,
  },
  btnActive: {
    backgroundColor: "#fff",
  },
  textBtn: {
    color: Colors.primary.text,
    fontSize: 14,
  },
  textActive: {
    color: "#B88A2A",

    // backgroundClip: "text",
    //    // Apply gradient inside text on web, but not supported in React Native yet
    // -webkit-background-clip: 'text',
  },
});
