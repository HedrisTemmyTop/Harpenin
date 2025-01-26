import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import TextFont from "@/components/TextFont";
import ReusableButton from "@/components/ReusableButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.dummyImage}></View>
        <View>
          <TextFont style={{}} font="NunitoSans_700Bold">
            Oluwatobia A.
          </TextFont>
          <TextFont font="NunitoSans_400Regular" style={{}}>
            Oluwatobia234@gmail.com
          </TextFont>
        </View>
      </View>
      <ReusableButton
        onPress={() => {
          router.push("/(app)/create");
        }}
        style={styles.button}
      >
        <View style={styles.btn}>
          <Image
            style={styles.btnImg}
            source={require("@/assets/images/create.png")}
          />
          <TextFont style={styles.btnText} font="NunitoSans_700Bold">
            Create an event
          </TextFont>
        </View>
        <View>
          <Ionicons
            name="chevron-forward"
            size={24}
            color={Colors.primary.line}
          />
        </View>
      </ReusableButton>
      <View style={styles.content}>
        <ReusableButton onPress={() => {}} style={styles.contentButton}>
          <View style={styles.btn}>
            <Image
              style={styles.btnImg}
              source={require("@/assets/images/notification.png")}
            />
            <TextFont style={styles.btnText} font="NunitoSans_400Regular">
              Notification settings
            </TextFont>
          </View>
          <View>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={Colors.primary.line}
            />
          </View>
        </ReusableButton>
        <ReusableButton onPress={() => {}} style={styles.contentButton}>
          <View style={styles.btn}>
            <Image
              style={styles.btnImg}
              source={require("@/assets/images/support.png")}
            />
            <TextFont style={styles.btnText} font="NunitoSans_400Regular">
              Feedback/suggestions
            </TextFont>
          </View>
          <View>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={Colors.primary.line}
            />
          </View>
        </ReusableButton>
        <ReusableButton onPress={() => {}} style={styles.contentButton}>
          <View style={styles.btn}>
            <Image
              style={styles.btnImg}
              source={require("@/assets/images/logout.png")}
            />
            <TextFont
              style={[styles.btnText, styles.btnLogout]}
              font="NunitoSans_400Regular"
            >
              Logout of my account
            </TextFont>
          </View>
          <View>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={Colors.primary.line}
            />
          </View>
        </ReusableButton>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 80,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  dummyImage: {
    width: 57,
    height: 57,
    borderRadius: "50%",
    backgroundColor: "#D9D9D9",
  },
  content: {
    marginTop: 5,
    backgroundColor: "#fff",
  },

  button: {
    marginTop: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  btnText: {
    fontSize: 16,
  },
  btnImg: {
    width: 24,
    height: 24,
    resizeMode: "cover",
  },
  contentButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  btnLogout: {
    color: Colors.primary.error,
  },
});
