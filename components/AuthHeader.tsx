import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "./Logo";
import TextFont from "./TextFont";
interface PropTypes {
  header: string;
  smallText: string;
  type: "register" | "login";
  children: ReactNode;
}

const AuthHeader = ({ header, smallText, type, children }: PropTypes) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Logo />
        {type === "register" && (
          <View
            // onPress={() => {}}
            style={styles.skip}
            // textStyle={styles.skipText}
          >
            <Text style={styles.skipText}> Skip signup</Text>
            <Feather
              name="chevrons-right"
              size={20}
              color={Colors.primary.text}
            />
          </View>
        )}
      </View>
      <View style={styles.header}>
        <TextFont style={styles.headerText} font="NunitoSans_600SemiBold">
          {header}
        </TextFont>
        <Text style={styles.textSmall}>{smallText}</Text>
      </View>
      {children}
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: "#fff",
  },
  header: {
    paddingBottom: 45,

    paddingHorizontal: 24,
  },
  headerText: {
    fontSize: 32,
  },
  textSmall: {
    fontSize: 16,
    color: Colors.primary.text,

    marginTop: 5,
  },
  skip: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  skipText: {
    color: Colors.primary.text,
    fontFamily: "Montaga-Regular",
    fontWeight: 400,
  },
  headerWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxHeight: 25,
    marginBottom: 45,

    paddingHorizontal: 24,
  },
  formWrapper: {
    flex: 1,
  },
});
