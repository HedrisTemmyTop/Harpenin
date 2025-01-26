import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconButton from "@/components/IconButton";
import TextFont from "@/components/TextFont";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import Input from "@/components/Input";
const Create = () => {
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

      <View style={styles.images}>
        <Ionicons name="image-outline" size={24} color={Colors.primary.line} />
        <TextFont font="NunitoSans_600SemiBold" style={styles.imageCap}>
          Add event fliers (3 max)
        </TextFont>
      </View>

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
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    marginTop: 42,
  },
  imageCap: {
    fontSize: 14,
  },

  //   inputContainer: { flex: 1 },
  inputWrapper: {
    marginTop: 32,
    flex: 1,
    // backgroundColor: "red",
    maxHeight: 80,
  },
  inputDescription: {
    maxHeight: 112,
  },
  inputAbout: { maxHeight: 171 },
  description: {
    height: 84,
  },
  info: {
    height: 143,
  },
  label: {
    marginBottom: 8,
  },
});
