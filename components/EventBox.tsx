import { Image, Modal, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import IconButton from "./IconButton";
import TextFont from "./TextFont";
import { Colors } from "@/constants/Colors";
import BottomDrawer from "./BottomDrawer";
import ReusableButton from "./ReusableButton";
import { useRouter } from "expo-router";

interface PropTypes {
  image: number;
  index?: number;
  icon?: "calendar-outline" | "share-social-sharp";
  onIconPress: VoidFunction;
  iconColor: string;
  active: boolean;
  iconImage?: ReactNode;
}

const images: any = {
  1: require("@/assets/images/newly-img-1.png"),
  2: require("@/assets/images/newly-img-2.png"),
  3: require("@/assets/images/newly-img-3.png"),
  4: require("@/assets/images/newly-img-4.png"),
  // Add more images as needed
};

const EventBox = ({
  image,
  index,
  icon,
  iconColor,
  onIconPress,
  iconImage,
  active,
}: PropTypes) => {
  const router = useRouter();
  // Map the image number to the corresponding image path
  const eventImage = images[image];
  const path = active
    ? require("@/assets/images/calendar-added.png")
    : require("@/assets/images/calendar-add.png");

  return (
    <>
      <ReusableButton
        onPress={() => router.push(`/(app)/${index}`)}
        style={styles.eventBox}
      >
        <View style={styles.eventMain}>
          <Image source={eventImage} style={styles.eventImg} />
          <View>
            <TextFont font="NunitoSans_600SemiBold" style={styles.eventText}>
              Art Exhibition 2022
            </TextFont>
            <TextFont font="NunitoSans_600SemiBold" style={styles.eventTime}>
              July 16th · WAT 8:00PM {index}
            </TextFont>
          </View>
        </View>
        <IconButton
          color={iconColor}
          onPress={onIconPress}
          iconImage={iconImage}
          icon={icon}
          size={24}
        />
      </ReusableButton>
    </>
  );
};

export default EventBox;

const styles = StyleSheet.create({
  eventBox: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary.line,
  },
  eventText: {
    fontSize: 18,
    lineHeight: 20,
    color: "#111111",
  },
  eventTime: {
    color: Colors.secondary.color,
    fontSize: 14,
  },
  eventImg: {
    resizeMode: "cover",
    width: 82,
    height: 82, // Ensure the image has a proper height
    borderRadius: 4,
  },
  eventMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
});
