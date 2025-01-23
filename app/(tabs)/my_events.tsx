import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import TextFont from "@/components/TextFont";
import { Colors } from "@/constants/Colors";
import ReusableButton from "@/components/ReusableButton";

const MyEvents = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <TextFont font="NunitoSans_700Bold" style={styles.head}>
          My Events
        </TextFont>
        <Text style={styles.headCaption}>
          All events you’re following &gt;&gt;&gt;
        </Text>
      </View>
      <View style={styles.empty}>
        <View style={styles.img}>
          <Image source={require("@/assets/images/empty-events.png")} />
        </View>
        <TextFont font="NunitoSans_700Bold" style={styles.boldText}>
          You’ve not added any events to follow
        </TextFont>
        <TextFont font="NunitoSans_400Regular" style={styles.smallText}>
          You can add events you like on the explore tab
        </TextFont>

        <ReusableButton onPress={() => {}} style={styles.btn}>
          <TextFont font="NunitoSans_700Bold" style={styles.btnText}>
            Explore events
          </TextFont>
        </ReusableButton>
      </View>
    </View>
  );
};

export default MyEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headContainer: {
    paddingTop: 80,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  head: {
    fontSize: 23,

    color: Colors.primary.button,
  },

  headCaption: {
    fontFamily: "Montaga-Regular",
    color: Colors.primary.text,
  },
  empty: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 5,
  },
  img: {
    backgroundColor: Colors.primary.border,
    width: 80,
    height: 80,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  boldText: {
    fontSize: 18,
    marginBottom: 10,
  },
  smallText: {
    color: Colors.primary.text,
  },

  btnText: {
    color: Colors.secondary.color,
    fontSize: 14,
  },
  btn: { marginTop: 40 },
});
