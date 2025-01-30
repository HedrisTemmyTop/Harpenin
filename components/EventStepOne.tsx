import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ReusableButton from "./ReusableButton";
import TextFont from "./TextFont";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import Input from "./Input";
// import DatePicker from "react-native-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import EventButton from "./EventButton";

// import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const EventStepOne = () => {
  const defaultData = { value: "", error: "" };
  const [date, setDate] = useState(new Date(1598051730000));
  // const [date, setDate] = useState("");
  const [mode, setMode] = useState("date");
  const [title, setTitle] = useState(defaultData);
  const [description, setDescription] = useState(defaultData);
  const [info, setInfo] = useState(defaultData);
  const [images, setImages] = useState<string[] | null>(null);

  const pickImage = async (type?: string) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log("result", result.assets[0]);
      setImages((prev: string[] | null) => {
        if (type === "edit" && prev) {
          return prev.map((item, i) => (i === 0 ? result.assets[0].uri : item));
          //   const items = prev;
          //   items.splice(0, 1, result.assets[0].uri);
          //   console.log(items);
          //   return items;
        }
        if (prev) return [...prev, result.assets[0].uri];
        else return [result.assets[0].uri];
      });
    }
  };
  const onChange = () => {
    // const currentDate = selectedDate;
    // setShow(false);
    // setDate(currentDate);
  };
  const handleEdit = async function () {
    await pickImage("edit");
  };
  const handleRemove = function () {
    setImages(
      (prev: string[] | null) => prev && prev?.filter((_, i) => i !== 0)
    );
  };
  const [singleDay, setSingleDay] = useState(true);
  useEffect(() => {
    // console.log(images, "images");
  }, [images]);
  return (
    <>
      {images && images.length > 0 ? (
        <ImageBackground source={{ uri: images[0] }} style={styles.imageBg}>
          <ReusableButton onPress={handleEdit}>
            <View style={styles.imgBtn}>
              <Image source={require("@/assets/images/edit.png")} />
            </View>
          </ReusableButton>
          <ReusableButton onPress={handleRemove}>
            <View style={styles.imgBtn}>
              <Image source={require("@/assets/images/delete.png")} />
            </View>
          </ReusableButton>
        </ImageBackground>
      ) : (
        <View style={styles.imageContainer}>
          <ReusableButton onPress={pickImage} style={styles.images}>
            <Ionicons
              name="image-outline"
              size={24}
              color={Colors.primary.line}
            />
            <TextFont font="NunitoSans_600SemiBold" style={styles.imageCap}>
              Add event fliers (3 max)
            </TextFont>
          </ReusableButton>
        </View>
      )}
      <View style={styles.imageContainer}>
        {images && images.length > 0 && (
          <View>
            <View style={styles.arrange}>
              <Image source={require("@/assets/images/arrange.png")} />
              <TextFont font="NunitoSans_Regular" style={styles.arrangeText}>
                Hold and drag to re-arrange images
              </TextFont>
            </View>
            <View style={styles.displayedImage}>
              {images.map((image, index) => (
                <View key={image} style={styles.img}>
                  <Image source={{ uri: image }} style={styles.imgContent} />
                  {index === 0 && (
                    <TextFont
                      font="NunitoSans_600SemiBold"
                      style={styles.cover}
                    >
                      Cover photo
                    </TextFont>
                  )}
                </View>
              ))}
              {images.length < 3 && (
                <ReusableButton onPress={pickImage} style={styles.addImage}>
                  <Ionicons name="add" size={24} color={Colors.primary.text} />
                </ReusableButton>
              )}
            </View>
          </View>
        )}
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
        {/* <TextFont font="NunitoSans_600SemiBold" style={styles.label}>
          Event date and time
        </TextFont> */}
        <EventButton
          isActive={singleDay}
          firstButton="Single day event"
          secondButton="Multiple day event"
          onToggle={(arg) => setSingleDay(arg)}
          label="Event date & time"
        />

        {/* <View style={styles.btns}>
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
        </View> */}

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
  imageBg: {
    height: 180,
    marginTop: 32,
    width: "100%",
    // backgroundColor: Colors.primary.border,
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    // height: 178,
    gap: 4,
    // borderWidth: 1,
    borderStyle: "dashed",
    borderColor: Colors.primary.line,

    // marginHorizontal: 24,
    flex: 1,
  },
  imgBtn: {
    backgroundColor: "rgba(0,0,0,.6)",
    width: 46,
    height: 46,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    // opacity: 0.1,
  },
  displayedImage: {
    flexDirection: "row",
    marginBottom: 40,
    gap: 8,
  },
  arrange: {
    flexDirection: "row",
    marginBottom: 10,
    gap: 8,
  },
  arrangeText: {
    color: Colors.primary.text,
    // flexDirection: "row",
  },
  img: {
    width: 86,
    height: 72,
  },
  imgContent: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 6,
  },
  addImage: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: Colors.primary.text,
    borderRadius: 6,
    width: 86,
    height: 72,
    justifyContent: "center",
    alignItems: "center",
  },
  cover: {
    color: Colors.primary.button,
    fontSize: 14,
  },
  imageCap: {
    fontSize: 14,
  },

  inputContainer: {
    flex: 1,
    // paddingTop: 32,
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
