import EventBox from "@/components/EventBox";
import EventVertical from "@/components/EventVertical";
import Reminder from "@/components/Reminder";
import TextFont from "@/components/TextFont";
import { Colors } from "@/constants/Colors";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const MyEvents = () => {
  const events = [
    1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1,
    2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <TextFont font="NunitoSans_700Bold" style={styles.head}>
          My Events
        </TextFont>
        <Text style={styles.headCaption}>
          All events you’re following &gt;&gt;&gt;
        </Text>
        <Reminder>
          Attending events with friends just always works. Remember to share
          one.
        </Reminder>
      </View>
      <View style={styles.upcoming}>
        <TextFont font="NunitoSans_700Bold" style={styles.headUpcoming}>
          Upcoming this week (3)
        </TextFont>
        <View style={styles.eventRow}>
          <FlatList
            horizontal={true}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <EventVertical totalItems={events.length} index={index} />
            )}
            data={events}
          />
        </View>
      </View>
      {/* <View style={styles.myEvent}></View> */}
      {/* <EmptyEvents /> */}
      <View style={styles.myEvent}>
        <TextFont font="NunitoSans_700Bold" style={styles.headUpcoming}>
          Your other events (3)
        </TextFont>
        <View style={styles.eventContainer}>
          <FlatList
            renderItem={({ item, index }: { item: number; index: number }) => (
              <EventBox image={item} index={index} icon="share-social-sharp" />
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
            data={events}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
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

  upcoming: {
    marginTop: 5,
    // paddingHorizontal: 24,

    paddingVertical: 15,
    backgroundColor: "#fff",
    width: "100%",
  },
  headUpcoming: {
    fontSize: 18,
    paddingHorizontal: 24,
    // marginTop: 15,
    marginBottom: 15,
  },
  eventRow: {},
  myEvent: {
    backgroundColor: "#fff",
    marginTop: 5,
    flex: 1,
    paddingTop: 15,
  },
  eventContainer: {
    // backgroundColor: "red",
    flex: 1,
  },
});
