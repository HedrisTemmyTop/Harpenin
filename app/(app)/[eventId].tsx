import BottomDrawer from "@/components/BottomDrawer";
import EventDetailsComponent from "@/components/EventDetails";
import FollowAlert from "@/components/FollowAlert";
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
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
const deviceHeight = Dimensions.get("window").height;
export default function EventDetails() {
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState("");
  const [isReported, setIsReported] = useState(false);
  const route = useRoute();
  const router = useRouter();
  const handleSubmit = function () {
    setDrawer("");
    setIsReported(true);
  };

  useEffect(() => {
    console.log(!!drawer, drawer);
  }, [drawer]);

  return (
    <>
      {/* Modal for BottomDrawer */}
      {isReported && (
        <FollowAlert
          onClose={() => setIsReported(false)}
          alertIcon={{
            icon: "checkmark-done",
            color: Colors.tertiary.success,
            size: 24,
          }}
        >
          Thankss, your report has been sent
        </FollowAlert>
      )}
      <Modal
        animationType="fade"
        transparent={true}
        visible={drawer !== ""}
        onRequestClose={() => setDrawer("")}
      >
        <View style={styles.drawer}>
          <BottomDrawer
            onClose={() => setDrawer("")}
            style={styles.bottomDrawer}
          >
            <ReportDrawer onSubmit={handleSubmit} />
          </BottomDrawer>
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

          {/* Modal for the options menu */}
          <Modal
            visible={modal}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setModal(false)}
          >
            <TouchableWithoutFeedback onPress={() => setModal(false)}>
              <View style={styles.modalOverlay}>
                <View style={styles.modal}>
                  <View style={styles.modalAction}>
                    <ReusableButton
                      onPress={() => {
                        setDrawer("share");
                        setModal(false);
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
                        setModal(false);
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
      </View>
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
    fontSize: 16,
  },
  register: {
    position: "absolute",
    zIndex: 2,
    paddingHorizontal: 24,
    paddingBottom: 35,
    bottom: 0,
    width: "100%",
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
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 16,
    width: 200,
    elevation: 5,
    shadowColor: "#000",
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
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    justifyContent: "flex-end", // Align BottomDrawer to the bottom
  },
  drawer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    justifyContent: "flex-end", // Align BottomDrawer to the bottom
  },
  bottomDrawer: {
    paddingTop: 20,
    height: deviceHeight / 1.5,
    maxHeight: 510,
  },
});
