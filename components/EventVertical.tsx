import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import TextFont from "./TextFont";
import { Colors } from "@/constants/Colors";
interface PropTypes {
  index: number;
  totalItems: number;
}

const EventVertical = ({ index, totalItems }: PropTypes) => {
  const firstItem = index === 0;
  const lastItem = index === totalItems - 1;
  return (
    <View
      style={[
        styles.margin,
        firstItem && styles.marginLeft,
        lastItem && styles.marginRight,
      ]}
    >
      <View>
        <Image
          source={require("@/assets/images/upcoming-img-1.png")}
          style={styles.eventImg}
        />
      </View>
      <TextFont font="NunitoSans_600SemiBold" style={styles.eventText}>
        Art Exhibition 2022...
      </TextFont>
      <TextFont font="NunitoSans_600SemiBold" style={styles.eventTime}>
        July 16th · WAT 8:00PM
      </TextFont>
    </View>
  );
};

export default EventVertical;

const styles = StyleSheet.create({
  eventImg: {
    maxWidth: 152,
    maxHeight: 152,
    borderRadius: 6,
    resizeMode: "cover",
  },

  eventText: {
    fontSize: 16,
    lineHeight: 20,
    color: "#111111",
    marginTop: 15,
  },
  eventTime: {
    color: Colors.secondary.color,
    fontSize: 14,
  },

  marginLeft: {
    marginLeft: 24,
  },
  marginRight: {
    marginRight: 24,
  },
  margin: {
    marginLeft: 10,
    // maxWidth: 153,
  },
});
