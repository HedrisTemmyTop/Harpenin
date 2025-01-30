import {
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import TextFont from "@/components/TextFont";
import IconButton from "@/components/IconButton";
import { useRouter } from "expo-router";
import EventDetailsComponent from "@/components/EventDetails";
import ReusableButton from "@/components/ReusableButton";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function EventDetails() {
  const [modal, setModal] = useState(false);
  const route = useRoute();
  const router = useRouter();
  // console.log(route.params.eventId);

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
        >
          <TouchableWithoutFeedback onPress={() => setModal(false)}>
            <View style={styles.modal}>
              <View style={styles.modalAction}>
                <ReusableButton onPress={() => {}} style={styles.modalBtn}>
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
                <ReusableButton onPress={() => {}} style={styles.modalBtn}>
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
          </TouchableWithoutFeedback>
        </Modal>
      </View>
      {/* <View style={styles.image}>
      <Image
        source={require("@/assets/images/preview.png")}
        style={styles.img}
      />
    </View> */}

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
    position: "absolute",
    bottom: "-250%",
    zIndex: 2,
    right: 24,
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.21,
    shadowRadius: 9,
    elevation: 5,
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
});
