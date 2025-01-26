import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "@/components/Header";
import TextFont from "@/components/TextFont";
import IconButton from "@/components/IconButton";
import { Colors } from "@/constants/Colors";
import EventBox from "@/components/EventBox";
import BottomDrawer from "@/components/BottomDrawer";
import { useReminder } from "@/context/ReminderContext";
import FollowAlert from "@/components/FollowAlert";
import Ionicons from "@expo/vector-icons/Ionicons";

type IconName = keyof typeof Ionicons.glyphMap;
const events = [
  1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2,
  3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4,
];

const Explore = () => {
  const [activeId, setActiveId] = useState<null | number>(null);
  const [alertIcon, setAlertIcon] = useState<{
    color: string;
    icon: IconName;
    size: number;
  }>({
    icon: "checkmark-done",
    color: Colors.tertiary.success,
    size: 24,
  });
  const [alertMessage, setAlertMessage] = useState("");
  const { reminderIds, onAddReminder, onRemoveReminder } = useReminder();

  // functions
  const handleReminder = function (id: number) {
    console.log(id);
    if (reminderIds.includes(id)) {
      onRemoveReminder(id);
      setAlertMessage("Event unfollowed");
      setAlertIcon({
        icon: "close",
        color: "white",
        size: 16,
      });
    } else setActiveId(id);
  };
  const handleAdded = function () {
    setAlertMessage("Event followed");
    setAlertIcon({
      icon: "checkmark-done",
      color: Colors.tertiary.success,
      size: 24,
    });
  };

  return (
    <>
      {alertMessage && (
        <FollowAlert onClose={() => setAlertMessage("")} alertIcon={alertIcon}>
          {alertMessage}
        </FollowAlert>
      )}
      <Modal
        animationType="fade"
        transparent={true}
        visible={activeId !== null}
        onRequestClose={() => setActiveId(null)}
      >
        <BottomDrawer
          onSubmit={handleAdded}
          onClose={() => setActiveId(null)}
          activeId={activeId}
        />
      </Modal>
      <View style={styles.container}>
        <Header />
        <View style={styles.newly}>
          <TextFont font="NunitoSans_700Bold" style={styles.text}>
            Newly uploaded events
          </TextFont>
          <EventBox
            iconImage={
              <Image
                source={
                  reminderIds.includes(0)
                    ? require("@/assets/images/calendar-added.png")
                    : require("@/assets/images/calendar-add.png")
                }
              />
            }
            image={1}
            onIconPress={() => {}}
            active={reminderIds.includes(0)}
            iconColor={!reminderIds.includes(0) ? "#B3B3C0" : "#EE9D24"}
          />
          <EventBox
            iconImage={
              <Image
                source={
                  reminderIds.includes(0)
                    ? require("@/assets/images/calendar-added.png")
                    : require("@/assets/images/calendar-add.png")
                }
              />
            }
            image={4}
            onIconPress={() => {}}
            active={reminderIds.includes(0)}
            iconColor={!reminderIds.includes(0) ? "#B3B3C0" : "#EE9D24"}
          />
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
              renderItem={({
                item,
                index,
              }: {
                item: number;
                index: number;
              }) => (
                <EventBox
                  iconImage={
                    <Image
                      source={
                        reminderIds.includes(index)
                          ? require("@/assets/images/calendar-added.png")
                          : require("@/assets/images/calendar-add.png")
                      }
                    />
                  }
                  image={item}
                  index={index}
                  onIconPress={() => handleReminder(index)}
                  active={reminderIds.includes(index)}
                  iconColor={
                    !reminderIds.includes(index) ? "#B3B3C0" : "#EE9D24"
                  }
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 20 }}
              data={events}
              keyExtractor={(_, index) => index.toString()}
            />
          </SafeAreaView>
        </View>
      </View>
    </>
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
