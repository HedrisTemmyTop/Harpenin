import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Logo from "./Logo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import TextFont from "./TextFont";
import Reminder from "./Reminder";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headWrapper}>
        <Logo />
        <View style={styles.location}>
          <Ionicons name="location-outline" size={24} color="black" />
          <TextFont font="NunitoSans_700Bold" style={styles.locationText}>
            Akure
          </TextFont>
        </View>
      </View>
      <Reminder>
        We’re busy scaling up our Harpenin to other locations pretty fast.
        Please hold on for us.
      </Reminder>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,

    backgroundColor: "#fff",
    paddingHorizontal: 24,

    paddingBottom: 20,
  },
  headWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  location: {
    backgroundColor: Colors.primary.border,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  locationText: { fontSize: 14 },
});
