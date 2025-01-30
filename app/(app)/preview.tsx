import EventDetails from "@/components/EventDetails";
import IconButton from "@/components/IconButton";
import TextFont from "@/components/TextFont";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  FlatListComponent,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Preview = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          onPress={() => router.back()}
          icon={"arrow-back"}
          size={24}
          color={"black"}
          style={{}}
        />
        <TextFont font="NunitoSans_700Bold" style={styles.headerText}>
          Event details
        </TextFont>
      </View>
      {/* <View style={styles.image}>
        <Image
          source={require("@/assets/images/preview.png")}
          style={styles.img}
        />
      </View> */}

      <EventDetails />

      {/* <CarouselComponent /> */}
    </View>
  );
};

export default Preview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 80,
    paddingBottom: 24,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    alignItems: "center",
  },
  headerText: {
    flexBasis: "65%",
    fontSize: 16,
    // backgroundColor: "red",
    // justifySelf: "start"
  },
});
