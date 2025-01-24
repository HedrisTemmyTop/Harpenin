import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "@/components/Header";
import TextFont from "@/components/TextFont";
import IconButton from "@/components/IconButton";
import { Colors } from "@/constants/Colors";
import EventBox from "@/components/EventBox";

const Explore = () => {
  const events = [
    1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1,
    2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4,
  ];
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.newly}>
        <TextFont font="NunitoSans_700Bold" style={styles.text}>
          Newly uploaded events
        </TextFont>
        <EventBox image={1} icon="calendar-outline" />
        <EventBox image={4} icon="calendar-outline" />
      </View>

      <View style={styles.events}>
        <View style={styles.header}>
          <TextFont font="NunitoSans_700Bold" style={styles.sortHead}>
            Events harpenin in Akure (25){" "}
          </TextFont>
          <View style={styles.sort}>
            <Image source={require("@/assets/images/filter.png")} />
            <TextFont font="NunitoSans_600SemiBold" style={styles.sortText}>
              Sort by
            </TextFont>
          </View>
        </View>
        <SafeAreaView style={styles.eventContainer}>
          <FlatList
            renderItem={({ item, index }: { item: number; index: number }) => (
              <EventBox icon="calendar-outline" image={item} index={index} />
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
            data={events}
            keyExtractor={(_, index) => index.toString()}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  newly: {
    marginTop: 5,
    backgroundColor: "#fff",
    // flex: 1,
    paddingTop: 10,
  },
  events: { marginTop: 5, backgroundColor: "#fff", flex: 1, paddingTop: 10 },
  sort: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  sortHead: {
    fontSize: 18,
  },
  sortText: {
    fontSize: 14,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,

    justifyContent: "space-between",
  },
  eventContainer: {
    // backgroundColor: "red",
    // marginBottom: 100,
    flex: 1,
  },
});
