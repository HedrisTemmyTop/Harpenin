import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ReusableButton from "./ReusableButton";
import TextFont from "./TextFont";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import Input from "./Input";
// import DatePicker from "react-native-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker";

// import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const EventStepOne = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  // const [date, setDate] = useState("");
  const [mode, setMode] = useState("date");

  const onChange = () => {
    // const currentDate = selectedDate;
    // setShow(false);
    // setDate(currentDate);
  };
  const [singleDay, setSingleDay] = useState(true);

  return (
    <>
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

        <View style={styles.times}>
          <View style={styles.time}>
            <TextFont
              style={styles.dateText}
              // style={[styles.textBtn, !singleDay && styles.textActive]}
              font="NunitoSans_Regular"
            >
              Choose date{" "}
            </TextFont>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              // is24Hour={true}

              style={styles.dateInput}
              onChange={onChange}
            />
          </View>
          <View style={styles.time}>
            <TextFont
              style={styles.dateText}
              // style={[styles.textBtn, !singleDay && styles.textActive]}
              font="NunitoSans_Regular"
            >
              Start time{" "}
            </TextFont>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"time"}
              // is24Hour={true}
              style={styles.dateInput}
              onChange={onChange}
            />
          </View>
          <View style={styles.time}>
            <TextFont
              style={styles.dateText}
              // style={[styles.textBtn, !singleDay && styles.textActive]}
              font="NunitoSans_Regular"
            >
              End time{" "}
            </TextFont>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"time"}
              // is24Hour={true}
              style={styles.dateInput}
              onChange={onChange}
            />
          </View>
        </View>
        {/* <EventDateTimePicker /> */}
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
    </>
  );
};

export default EventStepOne;

const styles = StyleSheet.create({
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

  footer: {
    paddingHorizontal: 24,

    // marginBottom: 100,
    // marginTop: 24,
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
  date: {
    // backgroundColor: "white",
    // borderWidth: 1,
    // borderColor: Colors.primary.line,
    // borderRadius: 10,
    width: "100%",

    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  dateText: {
    // color: "#7E7E8E",
    marginBottom: 5,
  },
  dateInput: {
    // width: 100000000,
    // // flex: 1,
    // backgroundColor: "red",
  },
  times: {
    flexDirection: "row",
    // marginTop: 10,
    // backgroundColor: "red",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginBottom: 80,
    // justifyContent: "center",
    // flex: 1,
  },
  time: {
    // width: "100%",
    flex: 1,
    // backgroundColor: "green",
    // justifyContent: "space-evenly",
    alignItems: "center",
  },
});
