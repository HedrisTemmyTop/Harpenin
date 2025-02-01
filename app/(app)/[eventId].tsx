import BottomDrawer from "@/components/BottomDrawer";
import EventDetailsComponent from "@/components/EventDetails";
import IconButton from "@/components/IconButton";
import ReminderDrawer from "@/components/ReminderDrawer";
import ReportDrawer from "@/components/ReportDrawer";
import ReusableButton from "@/components/ReusableButton";
import ShareDrawer from "@/components/ShareDrawer";
import TextFont from "@/components/TextFont";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function EventDetails() {
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState("");
  const route = useRoute();
  const router = useRouter();
  // console.log(route.params.eventId);
  useEffect(() => {
    console.log(!!drawer, drawer);
  }, [drawer]);
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={drawer !== ""}
        onRequestClose={() => setDrawer("")}
      >
        <View style={styles.modalOverlay}>
          <View
            style={{ backgroundColor: "black", padding: 40, borderRadius: 10 }}
          >
            <Text>This is a simple modal</Text>
          </View>
        </View>
      </Modal>
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
          <IconButton
            onPress={() => setModal(true)}
            icon={"ellipsis-vertical"}
            size={24}
            color={"black"}
            style={{}}
          />

          <Modal
            visible={modal}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setModal(false)}
            // style={styles.modalWrapper}
          >
            <TouchableWithoutFeedback onPress={() => setModal(false)}>
              <View style={styles.modalOverlay}>
                <View style={styles.modal}>
                  <View style={styles.modalAction}>
                    <ReusableButton
                      onPress={() => {
                        setDrawer("share");
                      }}
                      style={styles.modalBtn}
                    >
                      <Ionicons
                        name="share-social-sharp"
                        size={20}
                        color={"#B3B3C0"}
                      />
                      <TextFont
                        font="NunitoSans_600SemiBold"
                        style={[styles.modalBtnText, styles.black]}
                      >
                        Share
                      </TextFont>
                    </ReusableButton>
                    <ReusableButton
                      onPress={() => {
                        setDrawer("report");
                      }}
                      style={styles.modalBtn}
                    >
                      <Ionicons
                        name="information-circle"
                        size={20}
                        color={"#EF3535"}
                      />
                      <TextFont
                        font="NunitoSans_600SemiBold"
                        style={[styles.modalBtnText, styles.red]}
                      >
                        Report event
                      </TextFont>
                    </ReusableButton>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>

        <EventDetailsComponent />

        <View style={styles.register}>
          <ReusableButton onPress={() => {}} style={styles.registerBtn}>
            <TextFont font="NunitoSans_700Bold" style={styles.registerText}>
              Register (Free)
            </TextFont>
          </ReusableButton>
        </View>

        {/* <CarouselComponent /> */}
      </View>

      {/* <ReminderDrawer /> */}
    </>
  );
}

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
    position: "relative",
  },
  headerText: {
    // flexBasis: "65%",
    fontSize: 16,
    // backgroundColor: "red",
    // justifySelf: "start"
  },
  register: {
    position: "absolute",
    zIndex: 2,
    paddingHorizontal: 24,
    paddingBottom: 40,
    // paddingTop: 10,
    bottom: 0,
    width: "100%",
    // backgroundColor: "#fff",
  },

  registerBtn: {
    backgroundColor: Colors.primary.button,
    borderRadius: 12,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  registerText: {
    color: "#fff",
    fontSize: 16,
  },

  modal: {
    // width: 200,
    // height: 200,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 16,
    width: 200,
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.21,
    shadowRadius: 9,
    position: "absolute",
    right: 24,
    top: 100,
    zIndex: 3,
  },
  modalAction: {
    gap: 20,
  },
  modalBtn: {
    flexDirection: "row",
    gap: 12,
  },
  modalBtnText: {
    fontSize: 14,
  },
  black: {
    color: "#111111",
  },
  red: {
    color: "#EF3535",
  },
  modalOverlay: {
    flex: 1,

    // justifyContent: "center",
    // alignItems: "center",
    // position
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalWrapper: {
    width: 10,
    backgroundColor: "red",
  },
});
