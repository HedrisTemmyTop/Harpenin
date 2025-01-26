import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconButton from "@/components/IconButton";
import TextFont from "@/components/TextFont";
import { Colors } from "@/constants/Colors";

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
});
